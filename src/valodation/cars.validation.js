import Joi from "joi";

export const CarsValidation = Joi.object({
    model: Joi.string().regex(new RegExp('^[a-zA-ZА-яіІїЇЁё]{1,20}$')).required().messages({
        'string.empty': 'поле не може бути пустим',
        'string.pattern.base': 'Тільки букви'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.empty': '"modal" не можу бути пустим',
        'number.base': 'поле не може бути пустим'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.empty': '"modal" не можу бути пустим',
        'number.base': 'поле не може бути пустим'
    }),
})