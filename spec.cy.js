/// <reference types= 'cypress'/>
describe('Teste site Seu Barriga', () => {
  function getRndInteger(min,max) {
  return Math.floor(Math.random() * (max-min) ) + min;
}
const valor= getRndInteger(0,1000)
   it("Cadastro do usuário" , () => {
    cy.visit("https://seubarriga.wcaquino.me/login")
    cy.get(':nth-child(2) > a').click()
    cy.get('#nome').type('Caio Vinicius')
    cy.get('#email').type(`caiovinicius ${valor}@gmail.com`)
    cy.get('#senha').type('fabrica10')
    cy.get('.btn').click()
   });
   
  });
   beforeEach(() => {
    cy.reload()
});
describe('Conta cadastrada', () => {
it("Login de Usuário Cadastrado" , () => {
  cy.visit("https://seubarriga.wcaquino.me/login")
  cy.get('#email').type('caiovinicius10@gmail.com')
  cy.get('#senha').type('fabrica10')
  cy.get('.btn').click()
});
});
  
  describe('Testando o menu do site', () => {
    function getRndInteger(min,max) {
      return Math.floor(Math.random() * (max-min) ) + min;
    }
    const valor= getRndInteger(0,1000)
    it("Criando conta" , () => {
  cy.visit("https://seubarriga.wcaquino.me")
  cy.get('#email').type('caiovinicius10@gmail.com')
  cy.get('#senha').type('fabrica10')
  cy.get('.btn').click()
  cy.get('.navbar-brand').should('have.text','Seu Barriga')
  cy.get('.caret').click()
  cy.get('.dropdown-menu > :nth-child(1) > a').click()
  cy.get('#nome').type(`Conta de Caio ${valor}`)
  cy.get('.btn').click()
  /// Editar conta
  cy.get('[href="/editarConta?id=2057822"] > .glyphicon').click()
  cy.visit("https://seubarriga.wcaquino.me/editarConta?id=2057822")
  cy.get('#nome').click().clear().type(`Segunda Conta de Caio ${valor}`)
  cy.get('.btn').click()
    });
  });
  /// Criando Movimentação
  describe('Testando o menu do site', () => {
    function getRndInteger(min,max) {
      return Math.floor(Math.random() * (max-min) ) + min;
    }
    const dia= getRndInteger(2,31)
    const mes= getRndInteger(2,12)
    const ano= getRndInteger(2000,2024)
    const valor= getRndInteger(0,10000)
    it('Criando movimentação de Despesa',() => {
    cy.visit("https://seubarriga.wcaquino.me")
    cy.get('#email').type('caiovinicius10@gmail.com')
    cy.get('#senha').type('fabrica10')
    cy.get('.btn').click()
    cy.get('.navbar-brand').should('have.text','Seu Barriga')
  cy.get(':nth-child(3) > a').click()
  cy.get('#tipo').select('Despesa')
  cy.get('#data_transacao').type(`${dia}/`).type('0').type(`${mes}/`).type(`${ano}`)
  cy.get('#data_pagamento').type(`${dia}/`).type('0').type(`${mes}/`).type(`${ano}`)
  cy.get('#descricao').type('Pagamento mensal de contas')
  cy.get('#interessado').type("Comprador")
  cy.get('#valor').type(`${valor}`)
  cy.get('#conta').select('Conta de Caio 7')
  cy.get('#status_pendente').click()
  cy.get('.btn').click()
  cy.get('.alert').should('have.text','Movimentação adicionada com sucesso!')
  });
});
  describe('Testando movimentação de Receita', () => {
    function getRndInteger(min,max) {
      return Math.floor(Math.random() * (max-min) ) + min;
    }
    const dia= getRndInteger(1,31)
    const mes= getRndInteger(1,12)
    const ano= getRndInteger(2010,2030)
    const valor= getRndInteger(0,10000)
    it('Criando movimentação de Receita',() => {
    cy.visit("https://seubarriga.wcaquino.me")
    cy.get('#email').type('caiovinicius10@gmail.com')
    cy.get('#senha').type('fabrica10')
    cy.get('.btn').click()
    cy.get('.navbar-brand').should('have.text','Seu Barriga')
  cy.get(':nth-child(3) > a').click()
  cy.get('#tipo').select('Receita')
  cy.get('#data_transacao').type(`${dia}/`).type('0').type(`${mes}/`).type(`${ano}`)
  cy.get('#data_pagamento').type(`${dia}/`).type('0').type(`${mes}/`).type(`${ano}`)
  cy.get('#descricao').type('Pagamento mensal de contas')
  cy.get('#interessado').type("Comprador")
  cy.get('#valor').type(`${valor}`)
  cy.get('#conta').select('Conta de Caio 270')
  cy.get('#status_pago').click()
  cy.get('.btn').click()
});
  });
  describe('Testando a função Resumo Mensal', () => {
    it('Resumo Mensal',() => {
      cy.visit("https://seubarriga.wcaquino.me")
    cy.get('#email').type('caiovinicius10@gmail.com')
    cy.get('#senha').type('fabrica10')
    cy.get('.btn').click()
    cy.get('.navbar-brand').should('have.text','Seu Barriga')
    cy.get(':nth-child(4) > a').click()
    cy.get('#mes').select('Abril')
    cy.get('#ano').select('2021')
    cy.get('.btn').click()
    cy.get(':nth-child(5) > a').click()


  }); 
});  
