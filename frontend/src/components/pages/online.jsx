import React, { Component } from 'react'
import Main from '../template/main'

const headerProps = { //objeto criado, que irar ser passado para o componente Main
    icon: 'mobile',
    title: 'Aula Online',
    subtitle: 'Faça o seu treino onde estiver, através de uma video chamada'
}

export default class online extends Component {
    render() {
        return (
            <Main {...headerProps}>
            <div className='display-4'>Treine a Distância</div>
            <hr/>
            <div class="texto mx-3 text-justify">
    <p>
        Independente de onde você esteja, você tem acesso a um dos melhores programas de treinamento com um Personal Trainer Online que você pode experimentar.</p>
    <p/>
    <p>
        Com a minha consultoria online você terá tudo que precisa para alcançar resultados transformacionais que deseja no período que você precisa, já que os planos são criados para atender qualquer tipo de necessidade.</p>
    <p/>
    <p>
        Se sua motivação é ter um novo estilo de vida e deseja obter isso com a liberdade de determinar seus horários e locais de exercícios, a Consultoria Online é indicada e você está no lugar certo.</p>
    <p/>
    <p>
        Valorize seu desejo por ter um estilo de vida sustentável e conquiste níveis ótimos de saúde. Equilibre sua rotina de compromissos profissionais ou outras obrigações com seus novos hábitos e garanta a evolução pessoal que você tanto sonhou.</p>
    <p/>
    <p>
        <b>Quem é Rodrigo?</b></p>
    <p/>
    <p>
        Tenho mais de 10 anos de experiência em campo, utilizando a minha paixão por atividades físicas para transformar a vida das pessoas. Como Personal Trainer, trabalho com alunos homens e mulheres com os mais diferentes níveis de desenvolvimento físico e objetivos, saiba mais clicando <a href="../#/paginas/sobre.html">aqui</a>.</p>
    <p/>
    <p>
        <b>Como funciona?</b></p>
    <p/>
    <p>
        – Seu primeiro passo é agendar uma sessão gratuita, para avaliação de suas necessidades e objetivos. Você pode fazer isso clicando neste <a href="https://api.whatsapp.com/send/?phone=5511969364133&text&app_absent=0">link</a>.</p>
    <p/>
    <p>
        – Eu irei fornecer as informações que estarão no seu plano, frequência de aulas, dias e horários disponíveis.</p>
    <p/>
    <p>
        - Após a contratação você receberá seu plano de exercícios de aconselhamento, fará as sessões combinadas e terá contato direto comigo ele sempre que desejar.</p>
    <p/>
    <p>
        <b>Qual é o valor do investimento?</b></p>
    <p/>
    <p>
        - Por ser totalmente personalizada, é necessário conhecer seus objetivos e disponibilidade para determinar qual será o valor do investimento da sua Consultoria Online. Tenha certeza de que são valores altamente competitivos e menores do que se você frequentasse aulas presenciais.</p>
    <p/>                
    <p>
        <b>Para quais objetivos um Personal Trainer Online é indicado?</b></p>
    <p/>
    <p>
        A Consultoria Online pode lhe ajudar nos mais diversos objetivos. Perda de gordura, construção muscular, treinamento de força, condicionamento físico na gravidez e treinamento funcional usando metodologias e princípios de treinamento convencionais e/ou híbridos.</p>
    <p/>
    <p>
        <b>Por que a minha consultoria Online é diferente de outras opções?</b></p>
    <p/>                
    <p>
        Planos verdadeiramente baseados em você - Somente após conversar com você e entender suas necessidades e objetivos, irei desenvolver seu plano de exercícios.</p>
    <p/>
    <p>
        Sem planilhas ou outras soluções pré-fabricadas - Todos os planos de treinamento são projetados de forma individualizada e fornecidos de maneira segura, conveniente e centrada no aluno.</p>
    <p/>
    <p>
        A nossa interação é real e durante toda a duração do seu plano, a nossa relação será fácil e conveniente por meio de mensagens via WhatsApp, e-mail, telefone ou outra ferramenta de videochamada.</p>
</div>
            </Main>
        )
    }
}