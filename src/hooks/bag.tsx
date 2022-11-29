import { type } from 'os';
import React, {
    createContext,
    useContext,
    useState,
    ReactNode
} from 'react';

export type PropsBag = {
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
    phoneContact: number;
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
        gasType: '',
        store: '',
        location: '',
        name: '',
        pay: '',
        titleStore: '',
        logoName: '',
        navegation: '',
        typeCard: '',
        value: 0,
        valueCentus: 0,
        timeMinute: 0,
        timeSeconds: 0,
        phoneDDD: 0,
        phoneContact: 0,
        amount: 0,
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