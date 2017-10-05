<template>
  <div class="demo home">
    <div class="title"><span></span></div>
    <a v-for="info in goodItems" :href="`#/${info.id}`">
      <div class="demo-card">
        <div class="demo-card-heading">{{ info.NCM }}</div>
        <div class="demo-card-heading">{{ info.descricao }}</div>
        <div class="demo-card-heading">{{ info.classeEsperada }}</div>
      </div>
    </a>
    <a v-for="info in badItems" :href="`#/${info.id}`">
      <div class="demo-card">
        <div class="demo-card-heading">{{ info.NCM }}</div>
        <div class="demo-card-heading">{{ info.descricao }}</div>
        <div class="demo-card-heading">{{ info.classeEsperada }}</div>
      </div>
    </a>
  </div>
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
  data: function() {
    return { goodItems: GOOD_ITEMS, badItems: BAD_ITEMS }
  }
}
</script>

<style scoped>
@import '../variables.css';

.demo-card {
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  background: whitesmoke;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  transition: border-color 0.2s ease-in;
  cursor: default;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:hover {
    border-color: var(--color-green);
    cursor: pointer;

    & .demo-card-heading {
      color: var(--color-green);
    }
  }
}

.demo-card-heading {
  flex: 1;
  padding: 20px;
  text-align: center;
  color: var(--color-lightgray);
  font-family: var(--font-sans-serif);
  font-size: 20px;
  transition: color 0.2s ease-in;
}

.demo-card-image {
  & img {
    width: 180px;
    height: auto;
  }
}
</style>
