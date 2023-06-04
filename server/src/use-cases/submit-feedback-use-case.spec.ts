import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
    it('shoul be able to submit a feedback', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: 'example comment',
            })
        ).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('shouldnt be able to submit a feedback without type', async () => {
        await expect(
            submitFeedback.execute({
                type: '',
                comment: 'example comment',
                screenshot: 'data:image/png;based64,u213u21',
            })
        ).rejects.toThrow();
    });

    it('shouldnt be able to submit a feedback without comment', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: '',
                screenshot: 'test,jpeg',
            })
        ).rejects.toThrow();
    });

    it('shouldnt be able to submit a feedback with an invalid screenshot', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: 'ta tudo bugado',
                screenshot: 'test.png',
            })
        ).rejects.toThrow();
    });
});
