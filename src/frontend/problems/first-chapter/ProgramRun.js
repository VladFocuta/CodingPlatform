import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'


function ProgramRun() {
    const problemHeader = (
        <h4>
            Pentru a testa codul pe care urmeaza sa il trimiti, poti urma acesti pasi.
        </h4>
    )

    const problemContent = (
        <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 1. CodeBlocks</strong>
                <br />
                In cazul in care folosesti windows, descarca si instaleaza <a href='https://www.codeblocks.org/downloads/'>CodeBlocks</a> si apoi poti rula codul tau C++.
               
                <br /> <br />
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 2. Xcode <br /></strong>
                Pentru a rula codul tau pe macOS, poti descarca <a href='https://developer.apple.com/xcode/'>Xcode</a> de aici.<br /><br />


                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 3. Submiterea codului</strong><br />
                Cand doresti sa trimiti rezolvarea problemei, te rog sa testezi codul foarte bine si doar apoi sa il trimiti sub aceasta forma.
                <CodeStyle code={`#include <iostream>
using namespace std;

int main(){
  //codul tau

    return 0;
}`} />

            </div>
        </div>
    )


    return (
        <ProblemPage
            problemName="Rulare program"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            nextRoute="/problems/Suma"
            lecture={true} />

    )

}

export default ProgramRun