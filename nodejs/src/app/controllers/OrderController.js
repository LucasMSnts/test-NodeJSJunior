import * as Yup from 'yup';
import Order from '../models/Order';
import Contact from '../models/Contact';
import Address from '../models/Address';

class OrderController {
    async index(req, res) {
        const order = await Order.findAll({
            where: {
                id: req.params.id,
            },
            attributes: [
                'id',
                'fuel_cutoff',
                'trackers',
                'fleet_driver',
                'trackers_purchase',
            ],
            include: [
                {
                    model: Contact,
                    as: 'contact',
                    attributes: [
                        'first_name',
                        'last_name',
                        'email',
                        'phone',
                        'language',
                        'country',
                    ],
                },
                {
                    model: Address,
                    as: 'shipping',
                    attributes: [
                        'address_line1',
                        'address_line2',
                        'city',
                        'state',
                        'zip',
                    ],
                },
                {
                    model: Address,
                    as: 'billing',
                    attributes: [
                        'address_line1',
                        'address_line2',
                        'city',
                        'state',
                        'zip',
                    ],
                },
            ],
        });
        return res.json(order);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            contact_id: Yup.number().required(),
            shipping_id: Yup.number().required(),
            billing_id: Yup.number().required(),
            fuel_cutoff: Yup.boolean().required(),
            trackers: Yup.boolean().required(),
            fleet_driver: Yup.boolean().required(),
            trackers_purchase: Yup.number(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const {
            contact_id,
            shipping_id,
            billing_id,
            fuel_cutoff,
            trackers,
            fleet_driver,
            trackers_purchase,
        } = req.body;

        const order = await Order.create({
            contact_id,
            shipping_id,
            billing_id,
            fuel_cutoff,
            trackers,
            fleet_driver,
            trackers_purchase,
        });

        return res.json(order);
    }
}

export default new OrderController();
