import { Injectable } from '@angular/core';
import { Acerv } from './acerv/acerv.model';

@Injectable({
  providedIn: 'root'
})
export class AcervoService {
  cervs: Acerv[] = [
    {
      id: 'alerquina',
      name: 'Alerquina - Se jogando na cidade',
      serie: 'Novos 52, mensal',
      lancamento: 2014,
      rating: 3.5,
      imagePath: 'assets/img/quadrinhos/alerquina.jpg'
    },
    {
      id: 'arrow',
      name: 'Arqueiro - Maquina Mortífera',
      serie: 'Novos 52, mensal',
      lancamento: 2015,
      rating: 4.5,
      imagePath: 'assets/img/quadrinhos/arrow.jpg'
    },
    {
      id: 'arsenal',
      name: 'Capuz Vermelho e Arsenal - O Bromance acaba aqui',
      serie: 'Renascimento, anual',
      lancamento: 2012,
      rating: 4.0,
      imagePath: 'assets/img/quadrinhos/arsenal.jpg'
    },
    {
      id: 'batwoman',
      name: 'Batwoman',
      serie: 'Universo do Renascimento, mensal',
      lancamento: 2011,
      rating: 3.5,
      imagePath: 'assets/img/quadrinhos/batwoman.jpg'
    },
    {
      id: 'Constantine',
      name: 'Constantine - Um brindo as Mortos e Moribundos',
      serie: 'Novos 52, mensal',
      lancamento: 2015,
      rating: 4.5,
      imagePath: 'assets/img/quadrinhos/constantine.jpg'
    },
    {
      id: 'coringa',
      name: 'Coringa - Histórias do palhaço do Crime',
      serie: 'especial de comemoração',
      lancamento: 2020,
      rating: 5.0,
      imagePath: 'assets/img/quadrinhos/coringa.jpg'
    },
    {
      id: 'flash',
      name: 'Flash - Seguindo em frente',
      serie: 'Novos 52, mensal',
      lancamento: 2015,
      rating: 4.5,
      imagePath: 'assets/img/quadrinhos/flash.jpg'
    },
    {
      id: 'hera',
      name: 'Hera Venenosa - Ciclo de Vida e Morte',
      serie: 'edição especial',
      lancamento: 2011,
      rating: 4.0,
      imagePath: 'assets/img/quadrinhos/heravenenosa.jpg'
    },
    {
      id: 'lanternas',
      name: 'Tropa dos Lanternas Verde',
      serie: 'Novos 52, mensal',
      lancamento: 2014,
      rating: 3.5,
      imagePath: 'assets/img/quadrinhos/lanternas.jpg'
    },
    {
      id: 'mulhergato',
      name: 'Mulher Gato -',
      serie: 'Novos 52, anual',
      lancamento: 2015,
      rating: 3.5,
      imagePath: 'assets/img/quadrinhos/mulhergato.jpg'
    },
    {
      id: 'mulhermaravilha',
      name: 'Mulher Maravilha - Sangue',
      serie: 'Novos 52, mensal',
      lancamento: 2016,
      rating: 3.5,
      imagePath: 'assets/img/quadrinhos/mulhermaravilha.jpg'
    },
    {
      id: 'rapinas',
      name: 'Aves de Rapina - ano zero',
      serie: 'Novos 52, mensal',
      lancamento: 2014,
      rating: 5.0,
      imagePath: 'assets/img/quadrinhos/rapinas.jpg'
    },
    {
      id: 'sombria',
      name: 'Liga da Justiça Sombria - O Ultimo Homem de pé',
      serie: 'Novos 52, mensal',
      lancamento: 2015,
      rating: 4.5,
      imagePath: 'assets/img/quadrinhos/sombria.jpg'
    },
    {
      id: 'supergirl',
      name: 'Supergirl - Tudo acaba aqui',
      serie: 'Novos 52, mensal',
      lancamento: 2013,
      rating: 4.0,
      imagePath: 'assets/img/quadrinhos/supergirl.jpg'
    },
    {
      id: 'superman',
      name: 'Superman - Qual é o preço do amanhã',
      serie: 'Novos 52, mensal',
      lancamento: 2014,
      rating: 3.5,
      imagePath: 'assets/img/quadrinhos/superman.jpg'
    }
  ]
  constructor() { }
  acervo(): Acerv[]{
    return this.cervs;
  }
}
