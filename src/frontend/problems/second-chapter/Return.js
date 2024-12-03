import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function Return() {
// sa primesc un mesaj cand un nou comentariu a fost postat
    const problemContent = (
        <>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Cum funcționează return:</strong><br />
                În JavaScript (și în multe alte limbaje), folosim <strong className='highlight'>return</strong> în două moduri principale într-o funcție:<br />
                &nbsp;1.Pentru a opri o buclă (în special în contexte de funcție).<br />
                &nbsp;2.Pentru a returna o valoare ca rezultat al funcției.<br />
                Al doilea mod l-am folosit pana acum, ar trebui sa va fie familiar.<br />
                Iată o explicație detaliată a primei situații.<br />
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 1.Folosirea return pentru a opri o buclă while</strong><br />
                În exemplul <strong className='highlight'>nouaFunctie</strong>, <strong className='highlight'>return</strong> este folosit pentru a opri execuția funcției în anumite condiții și, implicit, pentru a opri și bucla <strong className='highlight'>while</strong>. Să analizăm detaliat fiecare parte a codului și să vedem rolul lui <strong className='highlight'>return</strong> aici.<br />
                Exemplu:
                <CodeStyle code={`function nouaFunctie(a) {
    let stop = 4;
    while (a > 0) {
        if (a === stop) {
            return;
        }
        a = Math.floor(a / 10);
    }
}
`} />
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Cum funcționează codul:</strong><br />
                <strong>1.Inițializarea valorilor:</strong><br />
                &nbsp;Variabila <strong className='highlight'>stop</strong> este setată la valoarea <strong className='highlight'>4</strong>.<br />
                &nbsp;Funcția primește un parametru <strong className='highlight'>a</strong>, care este un număr întreg.<br /><br />
                <strong>2.Bucla <strong className='highlight'>while (a &gt; 0)</strong>:</strong><br />
                &nbsp;Cât timp <strong className='highlight'>a</strong> este mai mare decât <strong className='highlight'>0</strong>, bucla <strong className='highlight'>while</strong> se va repeta.<br />
                &nbsp;În fiecare iterație, codul verifică dacă <strong className='highlight'>a</strong> este egal cu <strong className='highlight'>stop</strong> (adică 4) prin condiția <strong className='highlight'>if (a === stop)</strong>.<br /><br />
                <strong>3.Condția <strong className='highlight'>if (a === stop)</strong>:</strong><br />
                &nbsp;Dacă valoarea curentă a lui <strong className='highlight'>a</strong> este egală cu <strong className='highlight'>stop</strong> (adică 4), atunci funcția va executa <strong className='highlight'>return;</strong>.<br />
                &nbsp;<strong className='highlight'>return</strong> va opri întreaga funcție imediat, ieșind din bucla <strong className='highlight'>while</strong> și din funcție fără a returna o valoare specifică. Asta înseamnă că orice cod de după <strong className='highlight'>return</strong> nu va mai fi executat.<br /><br />
                <strong>4.Divizarea lui <strong className='highlight'>a</strong>:</strong><br />
                &nbsp;Dacă <strong className='highlight'>a</strong> nu este egal cu <strong className='highlight'>stop</strong>, funcția continuă și împarte valoarea lui <strong className='highlight'>a</strong> la <strong className='highlight'>10</strong>, păstrând doar partea întreagă <strong className='highlight'>(Math.floor(a / 10))</strong>.<br />
                &nbsp;Această operație de împărțire la 10 elimină ultima cifră <strong className='highlight'>a</strong> lui a în fiecare iterație.<br /><br />
                <strong>5.Finalizarea:</strong><br />
                &nbsp;Dacă valoarea lui <strong className='highlight'>a</strong> devine <strong className='highlight'>4</strong> în oricare iterație, funcția va executa <strong className='highlight'>return</strong> și se va opri.<br />
                &nbsp;Dacă <strong className='highlight'>a</strong> scade sub <strong className='highlight'>0</strong> fără a fi fost <strong className='highlight'>4</strong>, bucla se termină natural (fără <strong className='highlight'>return</strong>), iar funcția iese fără a întoarce nimic.<br /><br />
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Exemple de execuție:</strong><br />
                <strong>1.Când <strong className='highlight'>a</strong> este <strong className='highlight'>437</strong>:</strong><br />
                &nbsp;Prima iterație:<strong className='highlight'>a = 437</strong>, nu este egal cu <strong className='highlight'>4</strong>, deci împarte <strong className='highlight'>437 / 10</strong> → <strong className='highlight'>a</strong> devine <strong className='highlight'>43</strong>.<br />
                &nbsp;A doua iterație: <strong className='highlight'>a = 43</strong>, nu este egal cu <strong className='highlight'>4</strong>, deci împarte <strong className='highlight'>43 / 10</strong> → <strong className='highlight'>a</strong> devine <strong className='highlight'>4</strong>.<br />
                &nbsp;A treia iterație: <strong className='highlight'>a = 4</strong>, este egal cu <strong className='highlight'>stop</strong>, deci <strong className='highlight'>return</strong> se execută și funcția se oprește imediat.<br /><br />
                <strong>2.Când <strong className='highlight'>a</strong> este <strong className='highlight'>123</strong>:</strong><br />
                &nbsp;Prima iterație: <strong className='highlight'>a = 123</strong>, nu este <strong className='highlight'>4</strong>, deci <strong className='highlight'>123 / 10</strong> → <strong className='highlight'>a</strong> devine <strong className='highlight'>12</strong>.<br />
                &nbsp;A doua iterație: <strong className='highlight'>a = 12</strong>, nu este <strong className='highlight'>4</strong>, <strong className='highlight'>12 / 10</strong> → <strong className='highlight'>a</strong> devine <strong className='highlight'>1</strong>.<br />
                &nbsp;A treia iterație: <strong className='highlight'>a = 1</strong>, nu este <strong className='highlight'>4</strong>, <strong className='highlight'>1 / 10</strong> → <strong className='highlight'>a</strong> devine <strong className='highlight'>0</strong>.<br /><strong className='highlight'>123 / 10</strong>
                &nbsp;A patra iterație: <strong className='highlight'>a</strong> este acum <strong className='highlight'>0</strong>, iar bucla <strong className='highlight'>while</strong> se termină natural, fără a fi executat vreodată <strong className='highlight'>return</strong>.<br />
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Instructiunea return"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Stop"
            lecture={true}
        />
    )
}

export default Return