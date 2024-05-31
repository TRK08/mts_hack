import { defineStore } from "pinia"
import axios from "axios"

interface IState {
  result: string
  isLoading: boolean
}

export const useResultsStore = defineStore(
  "results",
  {
    state: (): IState => ({
      result: "",
      isLoading: false
    }),
    actions: {
      async uploadText(text: string) {
        this.isLoading = true

        try {
          const res = await axios.post(
            "/api/simplify_text",
            text
          )
          if (res.data) {
            this.result = res.data.text
          }
        } catch (e) {
          console.log(e)
        } finally {
          this.isLoading = false
        }
      },
      async uploadFile(file: any) {
        this.isLoading = true
        const formData = new FormData()
        formData.append("file", file.file)
        console.log(file.file)
        try {
          const res = await axios.post(
            "/api/simplify_file",
            formData
          )

          if (res.data) {
            this.result = res.data.text
          }
        } catch (e) {
          console.log(e)
        } finally {
          this.isLoading = false
        }
      }
    }
  }
)
