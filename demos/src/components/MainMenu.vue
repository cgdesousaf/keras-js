<template>
  <aside class="menu">
    <h1>Malha</h1>
    <p class="menu-label">Itens</p>
    <ul class="menu-list">
      <li :class="{ active: currentView === 'home' }">
        <a href="#/">Home</a>
      </li>
      <a v-for="info in goodItems" :href="`#/${info.id}`">
      <li :class="{ active: currentView === 'malha/${info.id}' }">
        <span class="menu-item-heading">{{ info.descricao }}</span>
        <span class="menu-item-subheading">{{ info.NCM }}</span>
      </li>
      </a>
      <a v-for="info in badItems" :href="`#/${info.id}`">
      <li :class="{ active: currentView === 'malha/${info.id}' }">
        <span class="menu-item-heading">{{ info.descricao }}</span>
        <span class="menu-item-subheading">{{ info.NCM }}</span>
      </li>
      </a>
    </ul>
  </aside>
</template>

<script>
const GOOD_ITEMS = [
  { id: 0, NCM: '7321.90.00', descricao: 'AGULHA DESENTFOGAO 2PC MULTIUSO', classeEsperada: ''},
  { id: 1, NCM: '7321.90.00', descricao: 'GRELHA CHUR.ESTANHADA 40X50CM', classeEsperada: ''},
  { id: 2, NCM: '8451.90.10', descricao: 'CAIXA DO CAMBIO MONDIAL', classeEsperada: ''},
  { id: 3, NCM: '8451.90.10', descricao: 'RETENTOR DO TANQUE ELECTROLUX LT12', classeEsperada: ''},
  { id: 4, NCM: '9405.92.00', descricao: 'LUMINARIA TARTARUGA BC OVAL CLEAN', classEsperada: ''}
]

const BAD_ITEMS = [
  { id: 5, NCM: '8414.45.20', descricao: 'VENTILADOR ARGE 60CM PAREDE MAX OSCILANTE 6520 PRETO BIVOLT', classeEsperada: ''},
  { id: 6, NCM: '8414.45.20', descricao: 'VENTILADOR TRON TETO PERA NEW 220V', classeEsperada: ''},
  { id: 7, NCM: '7321.11.00', descricao: 'FOGAO 4B. ATLAS COLISEUM BR', classeEsperada: ''},
  { id: 8, NCM: '7321.11.00', descricao: 'CHURRASQ. CHARBROIL IR 3Q A GAS INFRARED', classeEsperada: ''},
  { id: 9, NCM: '7321.11.00', descricao: 'FOGAO INDUSTRIAL INOX A GAS C 8 BOCAS 300x300', classEsperada: ''}
]

export default {
  props: {
    currentView: { type: String, default: 'home' }
  },
  data: function() {
    return { goodItems: GOOD_ITEMS, badItems: BAD_ITEMS }
  }
}
</script>

<style scoped>
@import '../variables.css';

.menu {
  padding: 40px;
  margin: 20px;
  background: whitesmoke;
  border-radius: 10px;
  box-shadow: 5px 5px #CCCCCC;

  & h1 {
    color: #CCCCCC;
    font-family: var(--font-sans-serif);
    font-size: 1.5rem;
    user-select: none;
    cursor: default;
  }
}

.menu-label {
  user-select: none;
  cursor: default;
}

.menu-list {
  & li {
    color: var(--color-lightgray);
    border-left: 2px solid whitesmoke;
    margin-bottom: 5px;
  }

  & li.active {
    border-left: 2px solid var(--color-green);
  }

  & a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:hover {
      color: var(--color-green);
      background-color: whitesmoke;

      & .github-logo {
        fill: var(--color-green);
      }
    }

    & span.menu-item-heading {
      margin-right: 10px;
    }

    & span.menu-item-subheading {
      color: #999999;
      font-size: 0.8em;
    }
  }
}

.menu-list.github, .menu-list.contact {
  & li {
    padding: 5px 10px;
  }

  & a {
    color: var(--color-green);
    padding: 0;
    display: inline-flex;
    background-color: none;
    transition: color 0.2s ease-in;

    & .github-logo {
      fill: var(--color-green);
      transition: fill 0.2s ease-in;
    }

    &:hover {
      color: var(--color-green-light);
      background: none;

      & .github-logo {
        fill: var(--color-green-light);
      }
    }
  }
}
</style>
