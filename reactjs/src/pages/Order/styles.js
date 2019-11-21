import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background: #eee;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1100px;

    justify-content: center;
    align-items: center;
    div {
        width: 100%;
        display: flex;
        flex-direction: row;

        h1 {
            color: #00008b;
        }

        div {
            margin-top: 10px;
            width: 100%;
        }
    }
`;

export const Info = styled.div`
    margin-top: 30px;
    margin-right: 0;
    max-width: 1100px;
    display: flex;

    div {
        display: inline-block;
        flex-direction: column;

        h1 {
            font-size: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        input {
            width: 91%;
            justify-content: center;

            margin: 10px 20px 10px 0;
            flex: 1;
            border: 1px solid #ddd;
            padding: 10px 15px;
            border-radius: 7px;
            font-size: 16px;

            &::placeholder {
                color: gray;
            }
        }

        span {
            color: #f64c75;
            display: flex;
            align-self: flex-start;
            margin: 10px;
            width: 500px;
        }

        div {
            margin-top: 8px;
            flex-direction: column;
            div {
                width: 250px;
            }
        }
    }

    .firstName,
    .lastName,
    .email,
    .phone,
    .language,
    .country {
        width: 44%;
    }

    .cityShip,
    .stateShip,
    .zipShip,
    .cityBill,
    .stateBill,
    .zipBill {
        width: 28%;
    }

    .checkShip {
        position: relative;
        width: 30px;
        height: 30px;
        margin: 0px 12px 0 12px;
        vertical-align: middle;
        top: -1px;
    }

    .checkFuel,
    .checkTracker,
    .checkFleet {
        position: relative;
        width: 30px;
        height: 30px;
        margin: 0px 12px 2px 12px;
        vertical-align: middle;
        top: -1px;
    }
`;

export const SubmitButton = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: #fff;

    div {
        display: flex;
        width: 0px;
    }

    button {
        height: 44px;
        width: 350px;
        background: #00008b;
        border: 0;
        padding: 0 15px;
        border-radius: 4px;
        font-weight: bold;
        color: #fff;
        font-size: 16px;
        margin: 15px 47px;

        flex-direction: row;
        align-items: center;
    }
`;
