const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Começa o jogo
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const intro = document.querySelector('.intro')
        const match = document.querySelector('.partida')

        playBtn.addEventListener('click', () => {
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // Jogar
    const playMatch = () => {
        const options = document.querySelectorAll('.option button');
        const playerHand = document.querySelector('.mao-jogador');
        const computerHand = document.querySelector('.mao-computador');
        const hands = document.querySelectorAll('.maos img')

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        // Opções computador
        const computerOptions = ['pedra', 'papel', 'tesoura'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                // Escolha do computador
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    // Chamar compareHands
                    compareHands(this.textContent, computerChoice);

                    // Trocar as imagens
                    playerHand.src = `images/${this.textContent}.png`;
                    computerHand.src = `images/${computerChoice}.png`;
                }, 2000);

                // Animação
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.ponto-jogador p');
        const computerScore = document.querySelector('.ponto-computador p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        // Mudando o texto
        const winner = document.querySelector('.vencedor');
        // Se houver empate
        if(playerChoice === computerChoice) {
            winner.textContent = 'Empate';
            return;
        }

        // Pedra
        if(playerChoice === 'pedra') {
            if(computerChoice === 'tesoura'){
                winner.textContent = 'Jogador Venceu';
                pScore++;
                updateScore()
                return;
            } else {
                winner.textContent = 'Computador Venceu';
                cScore++;
                updateScore()
                return;
            }
        }

        // Papel
        if(playerChoice === 'papel') {
            if(computerChoice === 'pedra'){
                winner.textContent = 'Jogador Venceu';
                pScore++;
                updateScore()
                return;
            } else {
                winner.textContent = 'Computador Venceu';
                cScore++;
                updateScore()
                return;
            }
        }

        // Tesoura
        if(playerChoice === 'tesoura') {
            if(computerChoice === 'papel'){
                winner.textContent = 'Jogador Venceu';
                pScore++;
                updateScore()
                return;
            } else {
                winner.textContent = 'Computador Venceu';
                cScore++;
                updateScore()
                return;
            }
        }
    };

    startGame();
    playMatch();
};

game();

// FEITO COM A AJUDA DO SEGUINTE VIDEO: https://www.youtube.com/watch?v=qWPtKtYEsN4&t=21s