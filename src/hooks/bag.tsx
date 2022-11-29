import { type } from 'os';
import React, {
    createContext,
    useContext,
    useState,
    ReactNode
} from 'react';

type PropsBag = {
    gasType: string;
    store: string;
    location: string;
    name: string;
    pay: string;
    value: number;
    valueCentus: number;
    timeMinute: number;
    timeSeconds: number;
    phoneDDD: number;
    phonePrimary?: number;
    phoneSecundary?: number;
    amount: number;
    amountCentus: number;
    titleStore: string;
    note: number;
    logoName: string;
    navegation: string;
    typeCard: string;
}

type BagContextData = {
    bag: PropsBag;
    handleUpdateBag: (value: PropsBag) => void;
    handleClearBag: () => void;
}

type BagProviderProps = {
    children: ReactNode;
}

function initialValues() {
    return {
        gasType: 'SupergasBras',
        store: '',
        location: 'Praça Miguel Ortega, 340',
        name: 'Gabriel Borges Olivera',
        pay: 'Crédito',
        titleStore: 'Tonho Gas',
        logoName: 'Tonho Gas',
        navegation: '',
        typeCard: 'green',
        value: 79,
        valueCentus: 99,
        timeMinute: 15,
        timeSeconds: 30,
        phoneDDD: 11,
        phonePrimary: 93435,
        phoneSecundary: 4029,
        amount: 1,
        amountCentus: 0,
        note: 0,        
    }
}

export const BagContext = createContext({} as BagContextData);

function BagProvider({ children }: BagProviderProps) {
    const [bag, setBag] = useState<PropsBag>(initialValues);

    function handleUpdateBag(value: PropsBag) {
        setBag(value);
    }

    function handleClearBag() {
        setBag(initialValues);
    }

    return (
        <BagContext.Provider value={{
            bag,
            handleUpdateBag,
            handleClearBag
        }}>
            {children}
        </BagContext.Provider>
    )
}

function useBag() {
    const context = useContext(BagContext);
    return context
}

export { BagProvider, useBag };