        // JavaScript para funcionalidades de acessibilidade
        document.addEventListener('DOMContentLoaded', function() {
            // Menu mobile
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                mobileMenu.classList.toggle('hidden');
            });
            
            // Modal acessível
            const openModalButton = document.getElementById('open-modal');
            const closeModalButton = document.getElementById('close-modal');
            const modal = document.getElementById('modal');
            
            openModalButton.addEventListener('click', function() {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Previne scroll
                
                // Foca no botão de fechar quando o modal abre
                setTimeout(() => {
                    closeModalButton.focus();
                }, 100);
            });
            
            closeModalButton.addEventListener('click', function() {
                modal.classList.add('hidden');
                document.body.style.overflow = ''; // Restaura scroll
                
                // Retorna o foco para o botão que abriu o modal
                openModalButton.focus();
            });
            
            // Fechar modal com ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                    modal.classList.add('hidden');
                    document.body.style.overflow = '';
                    openModalButton.focus();
                }
            });
            
            // Alternar alto contraste
            const highContrastToggle = document.getElementById('high-contrast-toggle');
            
            highContrastToggle.addEventListener('click', function() {
                document.body.classList.toggle('high-contrast');
                
                // Alterar texto do botão
                const icon = this.querySelector('i');
                if (document.body.classList.contains('high-contrast')) {
                    this.innerHTML = '<i class="fas fa-adjust mr-2" aria-hidden="true"></i>Contraste Normal';
                } else {
                    this.innerHTML = '<i class="fas fa-adjust mr-2" aria-hidden="true"></i>Alto Contraste';
                }
            });
            
            // Adicionar navegação por teclado para elementos customizados
            const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
            
            focusableElements.forEach(element => {
                element.addEventListener('keydown', function(e) {
                    // Espaço para botões que não são inputs
                    if (e.key === ' ' && this.tagName === 'BUTTON' && this.type !== 'submit') {
                        e.preventDefault();
                        this.click();
                    }
                });
            });
            
// Fechar menu mobile ao clicar em um link
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
});    
            
        });
        
// Sistema de comandos de voz
const voiceCommandBtn = document.getElementById('voice-command-btn');
const voiceFeedback = document.getElementById('voice-feedback');
const voiceMessage = document.getElementById('voice-message');

// Elementos de status
const voiceListening = document.getElementById('voice-listening');
const voiceProcessing = document.getElementById('voice-processing');
const voiceSuccess = document.getElementById('voice-success');
const voiceError = document.getElementById('voice-error');

// Modal de ajuda
const voiceHelpModal = document.getElementById('voice-help-modal');
const closeVoiceHelp = document.getElementById('close-voice-help');
const startVoiceTutorial = document.getElementById('start-voice-tutorial');

let recognition = null;
let isListening = false;

// Verificar suporte à API de Web Speech
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'pt-BR';

    recognition.onstart = function() {
        isListening = true;
        voiceCommandBtn.classList.add('voice-listening', 'bg-red-600');
        voiceFeedback.classList.remove('hidden');
        voiceListening.classList.remove('hidden');
        voiceProcessing.classList.add('hidden');
        voiceSuccess.classList.add('hidden');
        voiceError.classList.add('hidden');
        voiceMessage.textContent = 'Ouvindo... Fale agora!';
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        voiceMessage.textContent = `Comando: "${transcript}"`;
        processVoiceCommand(transcript);
    };

    recognition.onerror = function(event) {
        isListening = false;
        voiceCommandBtn.classList.remove('voice-listening', 'bg-red-600');
        voiceListening.classList.add('hidden');
        voiceError.classList.remove('hidden');
        
        if (event.error === 'not-allowed') {
            voiceMessage.textContent = 'Permissão de microfone negada.';
        } else {
            voiceMessage.textContent = 'Erro no reconhecimento de voz. Tente novamente.';
        }
        
        setTimeout(() => {
            voiceFeedback.classList.add('hidden');
        }, 3000);
    };

    recognition.onend = function() {
        isListening = false;
        voiceCommandBtn.classList.remove('voice-listening', 'bg-red-600');
    };
} else {
    // Navegador não suporta reconhecimento de voz
    voiceCommandBtn.addEventListener('click', function() {
        showVoiceFeedback('Seu navegador não suporta comandos de voz.', 'error');
    });
}

// Processar comandos de voz
function processVoiceCommand(command) {
    voiceListening.classList.add('hidden');
    voiceProcessing.classList.remove('hidden');
    
    setTimeout(() => {
        voiceProcessing.classList.add('hidden');
        voiceSuccess.classList.remove('hidden');
        
        // Mapeamento de comandos
        const commands = {
            'início': () => scrollToSection('inicio'),
            'inicio': () => scrollToSection('inicio'),
            'boas práticas': () => scrollToSection('boas-praticas'),
            'boas praticas': () => scrollToSection('boas-praticas'),
            'exemplos': () => scrollToSection('exemplos'),
            'recursos': () => scrollToSection('recursos'),
            'contato': () => scrollToSection('contato'),
            'abrir modal': () => openModalButton.click(),
            'alto contraste': () => highContrastToggle.click(),
            'contraste': () => highContrastToggle.click(),
            'ajuda': () => showVoiceHelp(),
            'comandos': () => showVoiceHelp(),
            'tutorial': () => startVoiceTutorial.click()
        };
        
        const normalizedCommand = command.trim();
        const action = commands[normalizedCommand];
        
        if (action) {
            action();
            voiceMessage.textContent = `Executando: ${command}`;
        } else {
            voiceError.classList.remove('hidden');
            voiceSuccess.classList.add('hidden');
            voiceMessage.textContent = `Comando não reconhecido: "${command}". Diga "ajuda" para ver os comandos.`;
        }
        
        setTimeout(() => {
            voiceFeedback.classList.add('hidden');
        }, 3000);
    }, 1000);
}

// Função para rolar até uma seção
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Adicionar foco para acessibilidade
        element.setAttribute('tabindex', '-1');
        element.focus();
        setTimeout(() => element.removeAttribute('tabindex'), 1000);
    }
}

// Mostrar feedback de voz
function showVoiceFeedback(message, type = 'info') {
    voiceFeedback.classList.remove('hidden');
    voiceMessage.textContent = message;
    
    // Reset todos os ícones
    voiceListening.classList.add('hidden');
    voiceProcessing.classList.add('hidden');
    voiceSuccess.classList.add('hidden');
    voiceError.classList.add('hidden');
    
    // Mostrar ícone baseado no tipo
    if (type === 'error') {
        voiceError.classList.remove('hidden');
    } else if (type === 'success') {
        voiceSuccess.classList.remove('hidden');
    } else if (type === 'processing') {
        voiceProcessing.classList.remove('hidden');
    }
    
    setTimeout(() => {
        voiceFeedback.classList.add('hidden');
    }, 3000);
}

// Mostrar ajuda de comandos
function showVoiceHelp() {
    voiceHelpModal.classList.remove('hidden');
    closeVoiceHelp.focus();
}

// Event Listeners para comandos de voz
voiceCommandBtn.addEventListener('click', function() {
    if (!recognition) {
        showVoiceFeedback('Navegador não suporta reconhecimento de voz.', 'error');
        return;
    }
    
    if (!isListening) {
        try {
            recognition.start();
        } catch (error) {
            showVoiceFeedback('Erro ao iniciar reconhecimento de voz.', 'error');
        }
    } else {
        recognition.stop();
    }
});

// Fechar modal de ajuda
closeVoiceHelp.addEventListener('click', function() {
    voiceHelpModal.classList.add('hidden');
});

// Iniciar tutorial
startVoiceTutorial.addEventListener('click', function() {
    voiceHelpModal.classList.add('hidden');
    setTimeout(() => {
        showVoiceFeedback('Tutorial: Clique no microfone e diga um comando como "início" ou "boas práticas"', 'success');
    }, 500);
});

// Fechar modal de ajuda com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !voiceHelpModal.classList.contains('hidden')) {
        voiceHelpModal.classList.add('hidden');
    }
});        