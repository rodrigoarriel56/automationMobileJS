const onboardingActions = require("../../page_definitions/page_actions/OnboardingActions.js");

Given("que aciono a opção parar abrir minha conta midway", () => {
  onboardingActions.abrirMinhaContaMidwayApp();
});

Given("aceito os termos de uso acionando a opção para entrar", () => {
  onboardingActions.clicarBotaoEntrar();
});

Given(
  "preencho todos os campos solicitados corretamente acionando a opção continuar quando necessário",
  async () => {
    const cpf = "27915823043";
    // TODO: usar fakerjs
    onboardingActions.preencherCPFEContinuar(cpf);
    // TODO: usar fakerjs
    onboardingActions.preencherNomeEContinuar("Rodrigo Florindo de Deus");
    //TODO: pegar dados que fazem sentido do yml e outros gerar do faker
    onboardingActions.preencherDadosPessoaisEContinuar({
      comoQueroSerChamado: "Rodrigo",
      celular: "11972563388",
      email: "rodrigo.florindo@gmail.com",
      dataNascimento: "11121988",
    });
    // TODO: ver realmente se esse compartilhar dados n existe mais
    // onboarding.clicarAceitoCompartilharMeusDados();
  }
);

Given(
  "após aceitar a permissão de Biometria Facial tiro corretamente uma foto",
  async () => {
    await onboardingActions.fazerBiometriaFacial();
  }
);

Given("preencho senha", () => {
  onboardingActions.preencherToken({
    tokenValido: "2"
  });

  // onboarding.clicarSolicitacaoConfiabilidade();
});

Then("conta pagamento criada com sucesso", () => {
  onboarding.clicarBotaoAceitarContaSimples();
  onboarding.clicarBotaoContinuarCestaBeneficios();
});
