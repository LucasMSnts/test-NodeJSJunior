import * as Yup from 'yup';
import Contact from '../models/Contact';

class ContactController {
    async store(req, res) {
        const schema = Yup.object().shape({
            first_name: Yup.string().required(),
            last_name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            phone: Yup.string().required(),
            language: Yup.string().required(),
            country: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const contactExits = await Contact.findOne({
            where: { email: req.body.email },
        });

        if (contactExits) {
            return res.status(200).json(contactExits);
        }

        const {
            id,
            first_name,
            last_name,
            email,
            phone,
            language,
            country,
        } = await Contact.create(req.body);

        return res.json({
            id,
            first_name,
            last_name,
            email,
            phone,
            language,
            country,
        });
    }
}

export default new ContactController();
