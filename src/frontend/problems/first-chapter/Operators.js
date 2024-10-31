import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'


function Operators() {
    const problemHeader = (
        <>
            <p>
                În JavaScript, operatorii sunt simboluri speciale, utilizate pentru a efectua operații pe valori sau variabile. Iată o listă cu principalii operatori din JavaScript și explicațiile lor:
            </p>
        </>
    )

    const problemContent = (
        <>


            <div className='userInfo' style={{ marginTop: '60px', width: '100%', flexDirection: 'column' }}>
                <h4 className='common-text'>
                    1. Operatori aritmetici (pentru calcule matematice)
                </h4>
                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>+ </strong> (Adunare): adună două valori.
                    </strong>
                    <br />
                    let suma = 5 + 3; // 8
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', marginTop: '20px' }}> <strong style={{ color: 'black', fontSize: '20px' }}>- </strong>(Scădere): scade o valoare din alta. </strong>
                    <br />
                    let diferenta = 10 - 4; // 6
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>* </strong> (Înmulțire): înmulțește două valori.</strong>
                    <br />
                    let produs = 7 * 2; // 14
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>/ </strong> (Împărțire): împarte o valoare la alta.</strong>
                    <br />
                    let impartire = 9 / 3; // 3
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>% </strong> (Modulo): returnează restul împărțirii.</strong>
                    <br />
                    let rest = 10 % 3; // 1
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>** </strong> (Exponentiere): ridică la putere o valoare.</strong>
                    <br />
                    let putere = 2 ** 3; // 8 (2 la puterea 3)
                </div>

            </div>

            <div className='userInfo' style={{ marginTop: '60px', width: '100%', flexDirection: 'column' }}>
                <h4 style={{ color: 'white' }}>
                    2. Operatori de atribuire (pentru a stoca valori în variabile)
                </h4>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>= </strong> (Atribuire simplă): atribuie o valoare unei variabile.</strong>
                    <br />
                    let x = 10;
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>+= </strong> (Atribuire cu adunare): adună și atribuie valoarea.</strong>
                    <br />
                    x += 5; // echivalent cu x = x + 5
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>-= </strong> (Atribuire cu scădere): scade și atribuie valoarea.</strong>
                    <br />
                    x -= 2; // echivalent cu x = x - 2
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>*= </strong> (Atribuire cu înmulțire): înmulțește și atribuie valoarea.</strong>
                    <br />
                    x *= 3; // echivalent cu x = x * 3
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>/= </strong> (Atribuire cu împărțire): împarte și atribuie valoarea.</strong>
                    <br />
                    x /= 2; // echivalent cu x = x / 2
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>%= </strong> (Atribuire cu modulo): aplică modulo și atribuie valoarea.</strong>
                    <br />
                    x %= 3; // echivalent cu x = x % 3
                </div>

            </div>

            <div className='userInfo' style={{ marginTop: '60px', width: '100%', flexDirection: 'column' }}>
                <h4 style={{ color: 'white' }}>
                    3. Operatori de comparație (pentru a compara două valori)
                </h4>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>== </strong>  (Egalitate): verifică dacă două valori sunt egale (fără a verifica tipul).</strong>
                    <br />
                    5 == "5"; // true
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>=== </strong>  (Egalitate strictă): verifică dacă două valori sunt egale și au același tip.</strong>
                    <br />
                    5 === "5"; // false (număr vs string)
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>!= </strong>  (Inegalitate): verifică dacă două valori nu sunt egale.</strong>
                    <br />
                    5 != "5"; // false
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>!==</strong>  (Inegalitate strictă): verifică dacă două valori nu sunt egale sau nu au același tip.</strong>
                    <br />
                    5 !== "5"; // true
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>&gt;</strong>  (Mai mare): verifică dacă o valoare este mai mare decât alta.</strong>
                    <br />
                    7 &gt; 3; // true
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>&lt;</strong>  (Mai mic): verifică dacă o valoare este mai mică decât alta.</strong>
                    <br />
                    3 &lt; 5; // true
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>&gt;=</strong>  (Mai mare sau egal): verifică dacă o valoare este mai mare sau egală cu alta.</strong>
                    <br />
                    5 &gt;= 5; // true
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>&lt;=</strong>  (Mai mic sau egal): verifică dacă o valoare este mai mică sau egală cu alta.</strong>
                    <br />
                    4 &lt;= 6; // true
                </div>
            </div>

            <div className='userInfo' style={{ marginTop: '60px', width: '100%', flexDirection: 'column' }}>
                <h4 style={{ color: 'white' }}>
                    4. Operatori logici (folosiți pentru a combina condiții)
                </h4>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>&&</strong> (AND logic): returnează true dacă ambele condiții sunt adevărate.</strong>
                    <br />
                    (5 &gt; 3 && 8 &gt; 6); // true
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>||</strong> (OR logic): returnează true dacă cel puțin una dintre condiții este adevărată.</strong>
                    <br />
                    (5 &gt;10 || 8 &gt; 6); // true
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>!</strong> (NOT logic): inversează valoarea (din true în false și invers).</strong>
                    <br />
                    !(5 &gt; 3); // false
                </div>
            </div>

            <div className='userInfo' style={{ marginTop: '60px', width: '100%', flexDirection: 'column' }}>
                <h4 style={{ color: 'white' }}>
                    5. Operatori unari (lucrează cu o singură valoare)
                </h4>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>++</strong> (Incrementare): crește valoarea unei variabile cu 1.</strong>
                    <br />
                    let x = 5;
                    x++; // x devine 6
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}><strong style={{ color: 'black', fontSize: '20px' }}>--</strong> (Decrementare): scade valoarea unei variabile cu 1.</strong>
                    <br />
                    let x = 5;
                    x--; // x devine 4
                </div>
            </div>

            <div className='userInfo' style={{ marginTop: '60px', width: '100%', flexDirection: 'column' }}>
                <h4 style={{ color: 'white' }}>
                    6. Operatori ternari (condiționali)
                    <br />
                    <strong style={{ fontSize: '16px' }}>  Operatorul ternar este o formă scurtă pentru condiții if-else. Acesta il veti folosi mai tarziu.</strong>
                </h4>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> condition ? exemplul1 : exemplul2 <br /> dacă condiția este adevărată, returnează exemplul1; altfel, returnează exemplul2.</strong>
                    <br />
                    let rezultat = (5 &gt; 3) ? "Adevărat" : "Fals"; // "Adevărat"
                </div>
            </div>

        </>
    )

    const problemEnd = (
        <h4 className='common-text'>
            Aceștia sunt cei mai importanți operatori din JavaScript, folosiți în diverse situații pentru a manipula variabile și valori.
        </h4>
    )
    return (
        <ProblemPage problemName="Operators"
            problemPoints={1}
            problemEnd={problemEnd}
            problemContent={problemContent}
            problemHeader={problemHeader}
            lecture={true}
            nextRoute="/Functions" />

    )
}

export default Operators