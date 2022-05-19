export interface feedback{
  type: string,
  comment: string,
  screenshot: string
}

export interface feedbackRepository{
  create: (data: feedback) => Promise<void>
}