const team = [
    {
        'nome': 'Wayne Barnett', 'ruolo': 'Founder & CEO', 'portrait': 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll', 'ruolo': 'Chief Editor', 'portrait': 'img/angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon', 'ruolo': 'Office Manager', 'portrait': 'img/walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez', 'ruolo': 'Social Media Manager', 'portrait': 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada', 'ruolo': 'Developer', 'portrait': 'img/scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos', 'ruolo': 'Graphic Designer', 'portrait': 'img/barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < team.length; i++) {
    console.log(team[i].nome);
    console.log(team[i].ruolo);
    console.log(team[i].portrait);
}

const teamContainer = document.getElementById('team-container');

team.forEach(member => {
  const memberDiv = document.createElement('div');
  const nomeDom = document.createElement('h4');
  const ruoloDom = document.createElement('h5');
  const portraitImg = document.createElement('img');

  nomeDom.innerText = member.nome;
  ruoloDom.innerText = member.ruolo;
  portraitImg.src = member.portrait;

  memberDiv.append(portraitImg);
  memberDiv.append(nomeDom);
  memberDiv.append(ruoloDom);

  teamContainer.append(memberDiv);
});

