import { createApp } from 'vue'

createApp({
    data () {
        return {

            ShowAllClicked: true,


            tags: {
                woman: true,
                LeonardoDaVinci: true,
                JohannesVermeer: true,
                VincentVanGogh: true,
                GustavKlimt: true,
                SandroBotticelli: true,
                JamesAbbottMcNeillWhistler: true,
                JanVanEyck: true,
                HieronymusBosch: true,
                GeorgesSeurat: true,
                PabloPicasso: true,
                PieterBruegelTheElder: true,
                ÉdouardManet: true,
                PietMondrian: true,
                DiegoRodríguezDeSilvaYVelázquez: true,
                FranciscoDeGoyaYLucientes: true,
                JeanAugusteDominiqueIngres: true,
                EugèneDelacroix: true,
                ClaudeMonet: true,
                CasparDavidFriedrich: true,
                ThéodoreGéricault: true,
                EdwardHopper: true,
                MarcelDuchamp: true,
                c1400: true,
                c1500: true,
                c1600: true,
                c1700: true,
                c1800: true,
                c1900: true,
            },         



        }
    },
    methods: {
        ShowAll () {

            
            this.ShowAllClicked = !this.ShowAllClicked;

            if(this.ShowAllClicked){
               
                Object.keys(this.tags).forEach((key) => {

                    this.tags[key] = true;
                })
            
            }
            else{

                Object.keys(this.tags).forEach((key) => {

                    this.tags[key] = false;
                })

            }
            }
    }
}).mount("#app")