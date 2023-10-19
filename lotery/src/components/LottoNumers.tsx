import {NumbersTypes} from '../types/numbersType'

export function LottoNumbers({numbers}: NumbersTypes) {
    return (
        <>
        <h3>Os números sorteados são: </h3>
        <ul>
        {numbers.length === 6 ? numbers.map((number) => (
            <li key={number}>{number}</li>
        )) : <span>Erro: a lista não contém 6 números</span>}
        </ul>
        </>
    )
}