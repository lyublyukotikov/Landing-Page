import { ref } from 'vue'

export interface SelectOption {
  value: string
  text: string
}

export function useSubjects() {
  const subjects = ref<SelectOption[]>([
    { value: 'support', text: 'Support' },
    { value: 'feedback', text: 'Feedback' },
    { value: 'business', text: 'Business Inquiry' },
  ])

  return { subjects }
}
