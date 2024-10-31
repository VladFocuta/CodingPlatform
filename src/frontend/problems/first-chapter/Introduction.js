import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'

function Introduction() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            Programarea este una dintre cele mai valoroase competențe în lumea digitală de astăzi, oferind oportunități nelimitate pentru inovare și dezvoltare personală. Dacă ești nou în acest domeniu, nu trebuie să te simți intimidat – programarea poate fi învățată de oricine, chiar și de la zero. Începând cu concepte de bază, vei descoperi cum să gândești logic, să rezolvi probleme și să construiești aplicații sau sisteme care pot face viața mai ușoară. Pe măsură ce avansezi, vei explora diferite limbaje de programare și vei dobândi abilități care te vor ajuta să creezi soluții creative și eficiente pentru diverse provocări. Această călătorie de învățare este una pas cu pas, fiecare lecție aducându-te mai aproape de a deveni un programator încrezător și competent.
        </h4>
    )


    return (
        <ProblemPage
            problemName="Introduction"
            problemPoints={1}
            problemHeader={problemHeader}
            lecture={true}
            nextRoute="/Variables" />
    )
}

export default Introduction