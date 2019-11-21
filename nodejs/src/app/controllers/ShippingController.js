import * as Yup from 'yup';
import Address from '../models/Address';

class ShippingController {
    async store(req, res) {
        const schema = Yup.object().shape({
            address_line1: Yup.string().required(),
            address_line2: Yup.string(),
            city: Yup.string().required(),
            state: Yup.string().required(),
            zip: Yup.string()
                .required()
                .min(5)
                .max(8),
            billing: Yup.boolean(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const addressExits = await Address.findOne({
            where: { zip: req.body.zip },
        });

        if (addressExits) {
            return res.status(200).json(addressExits);
        }

        const {
            id,
            address_line1,
            address_line2,
            city,
            state,
            zip,
            billing,
        } = await Address.create(req.body);

        return res.json({
            id,
            address_line1,
            address_line2,
            city,
            state,
            zip,
            billing,
        });
    }
}

export default new ShippingController();
