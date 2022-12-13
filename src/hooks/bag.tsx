
import {
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
    valor: number;
    titleStore: string;
    note: number;
    logoName: string;
    navegation: string;
    typeCard: 'orange' | 'gray' | 'yellow' | 'green';
    titleName: string;
    titlePay: string;
    typePay: 'Débito' | 'Crédito' | 'Dinheiro';
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
        typeCard: 'orange' as 'orange' | 'gray' | 'yellow' | 'green',
        titleName: '',
        titlePay: '',
        typePay: 'Débito' as 'Débito' | 'Crédito' | 'Dinheiro',
        value: 0,
        valueCentus: 99,
        timeMinute: 15,
        timeSeconds: 30,
        phoneDDD: 0,
        phoneContact: 0,
        amount: 0,
        note: 0,
        valor: 79,
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