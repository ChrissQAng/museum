import { reactive } from 'vue'

export const store = reactive({
  selectedObject: null,
  setSelectedObject(object) {
    this.selectedObject = object
  }
})