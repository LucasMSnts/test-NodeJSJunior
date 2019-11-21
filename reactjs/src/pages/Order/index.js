import React, { useState } from 'react';

import { Form, Input, Check } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Container, Content, Info, SubmitButton } from './styles';
import api from '../../services/api';

const schema = Yup.object().shape({
    // Contact
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string(),
    phone: Yup.string(),
    language: Yup.string(),
    country: Yup.string(),
    // Shipping
    addressShip1: Yup.string(),
    addressShip2: Yup.string(),
    cityShip: Yup.string(),
    stateShip: Yup.string(),
    zipShip: Yup.string()
        .min(5, 'Zip Code Invalid')
        .max(8, 'Zip Code Invalid'),
    // Billing
    addressBill1: Yup.string(),
    addressBill2: Yup.string(),
    cityBill: Yup.string(),
    stateBill: Yup.string(),
    zipBill: Yup.string()
        .min(5, 'Zip Code Invalid')
        .max(8, 'Zip Code Invalid'),
    checkShip: Yup.boolean().default(false),
    // Check
    checkFuel: Yup.boolean().default(false),
    checkTracker: Yup.boolean().default(false),
    checkFleet: Yup.boolean().default(false),
    trackerPurchase: Yup.number(),
});

export default function Order() {
    const [checkShip, SetCheckShip] = useState({ check: false });

    const [addressShip1, SetAddressShip1] = useState({
        disabled: false,
    });
    const [addressShip2, SetAddressShip2] = useState({
        disabled: false,
    });
    const [cityShip, SetCityShip] = useState({ disabled: false });
    const [stateShip, SetStateShip] = useState({ disabled: false });
    const [zipShip, SetZipShip] = useState({ disabled: false });

    const handleChecked = name => event => {
        SetCheckShip({ [name]: event.target.checked });
    };

    function onToggle() {
        if (checkShip) {
            SetAddressShip1({ disabled: !addressShip1.disabled });
            SetAddressShip2({ disabled: !addressShip2.disabled });
            SetCityShip({ disabled: !cityShip.disabled });
            SetStateShip({ disabled: !stateShip.disabled });
            SetZipShip({ disabled: !zipShip.disabled });
        }
    }

    async function handleSubmit(event) {
        try {
            // add or find Contact
            const dataCont = {
                first_name: event.firstName,
                last_name: event.lastName,
                email: event.email,
                phone: event.phone,
                language: event.language,
                country: event.country,
            };
            const cont = await api.post('/contacts', dataCont);

            // add or find Billing
            let dataAddress = {
                address_line1: event.addressBill1,
                address_line2: event.addressBill2,
                city: event.cityBill,
                state: event.stateBill,
                zip: event.zipBill,
                billing: event.checkShip,
            };
            const bill = await api.post('/billings', dataAddress);

            // Checking if the billing address as same shipping address
            if (!event.checkShip) {
                // add or find shipping
                dataAddress = {
                    address_line1: event.addressShip1,
                    address_line2: event.addressShip2,
                    city: event.cityShip,
                    state: event.stateShip,
                    zip: event.zipShip,
                };
            }
            const ship = await api.post('/shippings', dataAddress);

            // Save Order
            const dataOrder = {
                contact_id: cont.data.id,
                shipping_id: ship.data.id,
                billing_id: bill.data.id,
                fuel_cutoff: event.checkFuel,
                fleet_driver: event.checkFleet,
                trackers: event.checkTracker,
                trackers_purchase: event.trackerPurchase,
            };

            const order = await api.post('/orders', dataOrder);

            if (order) {
                toast.success('Successfully Generated');
            }
        } catch {
            toast.error('Error Saving Order');
        }
    }

    return (
        <Container>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Content>
                    <Info>
                        <div>
                            <h1>Contact Information:</h1>
                            <Input
                                name="firstName"
                                className="firstName"
                                type="text"
                                pattern="^[A-Za-z ]+$"
                                required
                                placeholder="First Name:"
                            />
                            <Input
                                name="lastName"
                                className="lastName"
                                type="text"
                                pattern="^[A-Za-z ]+$"
                                required
                                placeholder="Last Name:"
                            />
                            <Input
                                name="email"
                                className="email"
                                type="email"
                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                required
                                placeholder="Email Address:"
                            />
                            <Input
                                name="phone"
                                className="phone"
                                type="text"
                                required
                                pattern="[0-9]+$"
                                title="Number Entry Only"
                                placeholder="Phone:"
                            />
                            <Input
                                name="language"
                                className="language"
                                type="text"
                                required
                                pattern="^[A-Za-z ]+$"
                                placeholder="Language:"
                            />
                            <Input
                                name="country"
                                className="country"
                                type="text"
                                pattern="^[A-Za-z ]+$"
                                required
                                placeholder="Country:"
                            />
                        </div>
                        <div>
                            <h1>Shipping Address:</h1>
                            <Input
                                name="addressShip1"
                                type="text"
                                required
                                pattern="^[A-Za-z0-9, ]+$"
                                disabled={addressShip1.disabled}
                                placeholder="Address Line 1:"
                            />
                            <Input
                                name="addressShip2"
                                type="text"
                                pattern="^[A-Za-z0-9, ]+$"
                                disabled={addressShip2.disabled}
                                placeholder="Address Line 2:"
                            />
                            <Input
                                name="cityShip"
                                className="cityShip"
                                type="text"
                                pattern="^[A-Za-z ]+$"
                                required
                                disabled={cityShip.disabled}
                                placeholder="City:"
                            />
                            <Input
                                name="stateShip"
                                className="stateShip"
                                type="text"
                                pattern="^[A-Za-z ]+$"
                                required
                                disabled={stateShip.disabled}
                                placeholder="State:"
                            />
                            <Input
                                name="zipShip"
                                className="zipShip"
                                type="text"
                                required
                                title="Number Entry Only"
                                disabled={zipShip.disabled}
                                pattern="[0-9]+$"
                                placeholder="Zip Code:"
                            />
                        </div>
                    </Info>
                    <Info>
                        <div>
                            <h1>Billing Address:</h1>
                            <Input
                                name="addressBill1"
                                type="text"
                                required
                                pattern="^[A-Za-z0-9, ]+$"
                                placeholder="Address Line 1:"
                            />
                            <Input
                                name="addressBill2"
                                type="text"
                                pattern="^[A-Za-z0-9, ]+$"
                                placeholder="Address Line 2:"
                            />
                            <Input
                                name="cityBill"
                                className="cityBill"
                                type="text"
                                pattern="^[A-Za-z ]+$"
                                required
                                placeholder="City:"
                            />
                            <Input
                                name="stateBill"
                                className="stateBill"
                                type="text"
                                pattern="^[A-Za-z ]+$"
                                required
                                placeholder="State:"
                            />
                            <Input
                                name="zipBill"
                                className="zipBill"
                                type="text"
                                required
                                title="Number Entry Only"
                                pattern="[0-9]+$"
                                placeholder="Zip Code:"
                            />
                            <Check
                                name="checkShip"
                                className="checkShip"
                                checked={checkShip.check}
                                onChange={handleChecked('check')}
                                onClick={onToggle}
                                label="Use shipping address same as billing address"
                            />
                        </div>
                        <div className="checkEnter">
                            <h1>Check the boxes below:</h1>
                            <div>
                                <div>
                                    <Check
                                        name="checkFuel"
                                        className="checkFuel"
                                        label="Does any vehicle need to be equiped with a fuel cut off device?"
                                    />
                                </div>
                                <div>
                                    <Check
                                        name="checkTracker"
                                        className="checkTracker"
                                        label="Will any trackers ve installed on a bike, truck or machinery?"
                                    />
                                </div>
                                <div>
                                    <Check
                                        name="checkFleet"
                                        className="checkFleet"
                                        label="Will you need to identify the fleet drivers?"
                                    />
                                </div>
                                <br />
                                <Input
                                    name="trackerPurchase"
                                    type="Number"
                                    required
                                    placeholder="How many trackers would you like to purchase?"
                                />
                            </div>
                        </div>
                    </Info>
                </Content>
                <SubmitButton>
                    <div />
                    <button type="submit">Order Now</button>
                </SubmitButton>
            </Form>
        </Container>
    );
}
