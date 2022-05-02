import React, { Component } from 'react'
import Main from '../template/main'

const headerProps = { //objeto criado, que irar ser passado para o componente Main
    icon: 'user',
    title: 'Aula Presencial',
    subtitle: 'Realize uma aula diferente e personalizada, só para você'
}

export default class presencial extends Component {
    render() {
        return (
            <Main {...headerProps}>
            <div className='display-4'>Treino Personalizado</div>
            <hr/>
            <div class="texto mx-3 text-justify">
            <p>
                Não sabe por onde começar ou sente que está tendo poucos resultados? Experimente aulas presenciais individuais, qualquer que seja o seu nível, você receberá o apoio necessário para obter os resultados desejados, sempre com orientação e aconselhamento especializado.</p>
            <p/>
            <p>
                Eu e você trabalhando juntos para definir um plano de treinos baseado em sua realidade e com metodologia científica para facilitar a conquista de seus objetivos.</p>
            <p/>
            <p/>
            <p>
                <b>Quem é Rodrigo?</b>
            </p>
            <p/>
            <p>
                Tenho mais de 10 anos de experiência em campo, utilizando a minha paixão por atividades físicas para transformar a vida das pessoas. Como Personal Trainer, trabalho com alunos homens e mulheres com os mais diferentes níveis de desenvolvimento físico e objetivos, saiba mais clicando <a href="../#/paginas/sobre.html">aqui</a>.            
            </p>
            <p/>
            <p>
                <b>Como funciona?</b>
            </p>
            <p/>
            <p>
                – Seu primeiro passo é agendar uma sessão gratuita, para avaliação de suas necessidades e objetivos. Você pode fazer isso clicando neste <a href="https://api.whatsapp.com/send/?phone=5511969364133&text&app_absent=0">link</a>.
            </p>
            <p/>
            <p>
                – Eu irei fornecer as informações que estarão no seu plano, frequência de aulas, dias e horários disponíveis.
            </p>
            <p/>
            <p>
                - Após a contratação você receberá seu plano de exercícios de aconselhamento, fará as sessões combinadas e terá contato direto comigo ele sempre que desejar.
            </p>
            <p/>
            <p>
                <b>Qual é o valor do investimento?</b>
            </p>
            <p/>
            <p>
                - Por ser totalmente personalizada, é necessário conhecer seus objetivos e disponibilidade para determinar qual será o valor do investimento. Tenha certeza de que são valores altamente competitivos e menores do que se você frequentasse aulas presenciais.
            </p>
            <p/>                
            <p>
                <b>Por que eu deveria contratar um Personal Trainer se já frequento academia?</b>
            </p>
            <p/>
            <p>
                Você tem um mentor especialista que estará lá para potencializar a sua performance e lhe ajudar a conquistar resultados melhores e mais rápidos</p>
            <p/>
                Tenha o conhecimento de alguém que está há anos dedicado integralmente a explorar da melhor forma os limites do corpo humano à sua disposição.<p/>
            <p/>
            <p>
                <b>Por que Aulas Presenciais são a melhor opção para mim?</b></p>
            <p/>                
            <p>
                Planos verdadeiramente baseados em você - Somente após conversar com você e entender suas necessidades e objetivos, irei desenvolver seu plano de exercícios.
            </p>
            <p/>
            <p>
                Seus treinos serão personalizados - desde o início encontrar o que funciona para você. Não importa qual seja o seu objetivo, o conhecimento e a paixão para traçar um ótimo plano e ajudá-lo a chegar lá.</p>
            <p>
            </p>    
            <p>
                Você acompanhará seu progresso - Frequentemente suas metas serão revisadas. Conforme você fica mais forte, você evolui para além do que você pensava ser possível.</p>
            <p/>
            <p>
                Sinta-se motivado a todo tempo  - Esqueça-se de como é se sentir desmotivado e ceder às desculpas. Você terá todo o apoio a cada etapa de sua jornada de preparação física. Você compartilhará altos e baixos e sairá mais forte do que nunca.</p>
                </div>
            </Main>
        )
    }
}