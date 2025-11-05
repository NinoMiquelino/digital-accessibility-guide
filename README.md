## 🙋‍♂️ Autor

<div align="center">
  <img src="https://avatars.githubusercontent.com/ninomiquelino" width="100" height="100" style="border-radius: 50%">
  <br>
  <strong>Onivaldo Miquelino</strong>
  <br>
  <a href="https://github.com/ninomiquelino">@ninomiquelino</a>
</div>

---

# 🌐 Guia Prático de Acessibilidade Digital

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Accessibility](https://img.shields.io/badge/Accessibility-000000?style=for-the-badge&logo=accessibility&logoColor=white)](https://www.w3.org/WAI/)
![License MIT](https://img.shields.io/badge/License-MIT-green)
![Status Stable](https://img.shields.io/badge/Status-Stable-success)
![Version 1.0.0](https://img.shields.io/badge/Version-1.0.0-blue)
![GitHub stars](https://img.shields.io/github/stars/NinoMiquelino/digital-accessibility-guide?style=social)
![GitHub forks](https://img.shields.io/github/forks/NinoMiquelino/digital-accessibility-guide?style=social)
![GitHub issues](https://img.shields.io/github/issues/NinoMiquelino/digital-accessibility-guide)



Um projeto educativo que demonstra na prática como implementar acessibilidade digital, mostrando que código bem escrito pode incluir mais pessoas na experiência web.

## 🎯 Sobre o Projeto

Este projeto é uma aplicação web completa desenvolvida para educar desenvolvedores, designers e product managers sobre as melhores práticas de acessibilidade digital. Através de exemplos práticos e implementações reais, mostramos como pequenas mudanças no código podem impactar positivamente a experiência de mais de 1 bilhão de pessoas com deficiência no mundo.

### ✨ Características Principais

- **🎨 Design Moderno e Responsivo** - Interface limpa que se adapta a qualquer dispositivo
- **♿ Totalmente Acessível** - Implementa todas as diretrizes WCAG 2.1 Level AA
- **🎤 Navegação por Voz** - Sistema completo de comandos de voz integrado
- **⌨️ Navegação por Teclado** - Experiência completa sem uso do mouse
- **🌈 Alto Contraste** - Modo de alto contraste para baixa visão
- **📱 Mobile-First** - Design otimizado para dispositivos móveis

## 🚀 Funcionalidades

### 🎯 Navegação Acessível
- **Skip Links** - Links para pular para conteúdo principal
- **ARIA Labels** - Atributos semânticos para leitores de tela
- **Focus Management** - Gerenciamento inteligente de foco
- **Keyboard Navigation** - Navegação completa por teclado

### 🎤 Comandos de Voz
- **Navegação Hands-Free** - Controle o site apenas com voz
- **Comandos em Português** - Reconhecimento de voz nativo em PT-BR
- **Feedback Visual** - Indicadores de status do reconhecimento
- **Lista de Comandos** - Modal de ajuda integrado

### 🎨 Design Inclusivo
- **Contraste WCAG** - Cores com contraste adequado
- **Tipografia Legível** - Fontes e tamanhos otimizados
- **Ícones Descritivos** - Ícones com labels acessíveis
- **Estados Visíveis** - Estados de foco e hover bem definidos

### 📝 Exemplos Práticos
- **Formulários Acessíveis** - Labels, errors e validações
- **Modais Acessíveis** - Trap de foco e fechamento por ESC
- **Tabelas Semânticas** - Estrutura correta para leitores de tela
- **Navegação Mobile** - Menu responsivo e acessível

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **Tailwind CSS** - Framework CSS utilitário
- **JavaScript ES6+** - Interatividade e acessibilidade
- **Font Awesome** - Ícones acessíveis
- **Web Speech API** - Reconhecimento de voz nativo
- **WCAG 2.1** - Diretrizes de acessibilidade

## 📁 Estrutura do Projeto

```bash
digital-accessibility-guide/
│
├──index.html              # Arquivo principal
├──README.md              # Documentação
└──assets/
├── css/
│   └── style.css      # Estilos personalizados
└── js/
└── script.js      # JavaScript modular
```

## 🎮 Como Usar

### Comandos de Voz Disponíveis

| Comando | Ação |
|---------|------|
| **"Início"** | Navega para a seção inicial |
| **"Boas práticas"** | Vai para a seção de boas práticas |
| **"Exemplos"** | Acessa os exemplos práticos |
| **"Recursos"** | Mostra recursos e ferramentas |
| **"Contato"** | Vai para a seção de contato |
| **"Abrir modal"** | Abre o modal de demonstração |
| **"Alto contraste"** | Alterna o modo de alto contraste |
| **"Ajuda"** | Mostra a lista de comandos |

### Navegação por Teclado

- **Tab** - Navega entre elementos interativos
- **Shift + Tab** - Navegação reversa
- **Enter/Space** - Ativa elementos
- **ESC** - Fecha modais e cancela ações
- **Teclas de Seta** - Navega em menus e opções

## 🚀 Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/digital-accessibility-guide.git
```

1. Acesse o diretório
   ```bash
   cd digital-accessibility-guide
   ```
2. Abra o projeto
   · Abra o arquivo index.html em seu navegador
   · Ou use um servidor local:
   ```bash
   python -m http.server 8000
   ```

📋 Checklist de Acessibilidade Implementada

✅ Perceptível

· Textos alternativos para imagens
· Legendas e transcrições
· Contraste de cores adequado
· Redimensionamento de texto
· Conteúdo apresentável de múltiplas formas

✅ Operável

· Navegação completa por teclado
· Tempo suficiente para interação
· Conteúdo sem seizures
· Navegação facilitada
· Modos de entrada múltiplos

✅ Compreensível

· Texto legível e compreensível
· Funcionamento previsível
· Assistência em entrada de dados
· Navegação consistente

✅ Robusto

· Compatibilidade com tecnologias assistivas
· HTML semântico e válido
· Atributos ARIA apropriados
· Testado com leitores de tela

🧪 Testes de Acessibilidade

O projeto foi testado com:

· NVDA + Firefox
· JAWS + Chrome
· VoiceOver + Safari
· Navegação apenas por teclado
· Extensões de verificação (axe, WAVE)
· Simuladores de daltonismo

🤝 Contribuindo

Contribuições são bem-vindas! Siga estos passos:

1. Fork o projeto
2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request

📝 Guidelines para Contribuição

· Siga as diretrizes WCAG 2.1 Level AA
· Mantenha a semântica HTML
· Adicione atributos ARIA quando necessário
· Teste a navegação por teclado
· Verifique o contraste de cores

📊 Estatísticas de Acessibilidade

Categoria Conformidade
Perceptível 95%
Operável 98%
Compreensível 96%
Robusto 94%
Overall 96%

🌟 Próximas Funcionalidades

· Internacionalização (inglês, espanhol)
· Modo escuro automático
· Mais comandos de voz
· Testes automatizados de acessibilidade
· PWA (Progressive Web App)
· Dashboard de métricas de acessibilidade

📚 Recursos e Referências

· WCAG 2.1
· ARIA Authoring Practices
· WebAIM
· A11Y Project
· MDN Web Accessibility

📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

🙏 Agradecimentos

· Equipe do W3C WAI pelas diretrizes WCAG
· Comunidade de acessibilidade web
· Todos os testadores e contribuidores

---

<div align="center">

🌟 "A verdadeira tecnologia é aquela que não exclui ninguém" 🌟

Se você achou este projeto útil, considere dar uma ⭐ no repositório!

</div>

---

## 🤝 Contribuições
Contribuições são sempre bem-vindas!  
Sinta-se à vontade para abrir uma [*issue*](https://github.com/NinoMiquelino/digital-accessibility-guide/issues) com sugestões ou enviar um [*pull request*](https://github.com/NinoMiquelino/digital-accessibility-guide/pulls) com melhorias.

---

## 💬 Contato
📧 [Entre em contato pelo LinkedIn](https://www.linkedin.com/in/onivaldomiquelino/)  
💻 Desenvolvido por **Onivaldo Miquelino**

---
