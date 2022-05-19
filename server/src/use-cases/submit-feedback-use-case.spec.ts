import {SubmitFeedbackUseCase} from "./submit-feedback-use-case"

// observa se um função foi chamada
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {

  const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy },
    {sendMail: sendMailSpy}
  );

  it("should be able to submit a feedback", async () => {
    await expect(submitFeedback.execute({
    comment: "bugado",
    type: "BUG",
    screenshot: "data:image/png;base64, alskj23uyu3fe88f88f00rf20f0220932035"
    })).resolves.not.toThrow();

    // espera que a função seja chamada
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without type", async () => {
      await expect(submitFeedback.execute({
      comment: "bugado",
      type: "",
      screenshot: "data:image/png;base64, alskj23uyu3fe88f88f00rf20f0220932035"
    })).rejects.toThrow();
  });

  it("should not be able to submit a feedback without comment", async () => {
    await expect(submitFeedback.execute({
    comment: "",
    type: "BUG",
    screenshot: "data:image/png;base64, alskj23uyu3fe88f88f00rf20f0220932035"
    })).rejects.toThrow();
  });

  it("should not be able to submit a feedback with invalid screenshot format", async () => {
    await expect(submitFeedback.execute({
    comment: "bugado",
    type: "BUG",
    screenshot: "test.jpg"
  })).rejects.toThrow();
})
})
