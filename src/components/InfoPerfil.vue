<template>
	<div class="cuerpo">
		<div class="avatar">
			<v-avatar size="150" >
				<img
					src="../assets/avatar2.jpg"
					alt="John"
				>
			</v-avatar>
		</div>
		<div id=texto>
			<div id=nombre>
				<h2>
					Adrian Gil Miranda
				</h2>

				<v-dialog v-model="perfil" persistent max-width="600px">
					<template v-slot:activator="{ on }">
						<v-btn x-small v-on="on" class="ma-2" size="36px" outlined fab color="purple darken-1">
							<v-icon>mdi-pencil</v-icon>
						</v-btn>
                    </template>

					<v-card>
						<v-card-title>
							<!-- Foto y debajo cambiar foto de perfil con boton -->
							<!-- Formulario con nombre, apellidos y biografia -->
							<h4 class ="purple--text" style="font-family: arial">Editar perfil</h4><v-spacer></v-spacer>
							<v-card-actions>
								<v-icon color="purple darken-1" text @click="perfil = false">mdi-close-thick</v-icon>
							</v-card-actions>
						</v-card-title>

						<v-divider></v-divider>
						
						<v-card-text>
							<div class="mt-5" align-center>
								<v-layout  align-center justify-center>
								<v-avatar size = "100">
									<img src="/avatar2.jpg" alt="">
								</v-avatar>
								</v-layout>
								<v-layout  align-center justify-center>
									<v-btn text small class="purple--text" @click="onPickFile">Cambiar foto de perfil</v-btn>
									<input type="file" style = "display: none" ref="fileImput" accept="image/*" @change="onFilePicked">
								</v-layout>
							</div>
							<v-form class="px-3">
								<v-text-field  label="Nuevo nombre" ></v-text-field>
								<v-text-field label ="Nueva biografía"></v-text-field>
							</v-form>
							<div class="text-center">
								<v-btn  color="purple darken-1" dark @click="confirma = false">Guardar</v-btn>
							</div>
						</v-card-text>
            
                </v-card>
				</v-dialog> 
			</div>
			<p>
				Cloud Strife es el héroe principal del RPG Final Fantasy VII, de Squaresoft.
				También ha participado como «invitado» en Kingdom Hearts y Super Smash Bros.
				Su voz en el doblaje japonés corre a cargo del actor Takahiro Sakurai
			</p>
		</div>  

	</div>
</template>

<script>
export default {
    data(){
        return{
           imageUrl: '',
       //description: '',
        date: new Date(),
        time: new Date(),
        image: null,
        perfil: false,
        contraseña: false,
        confirma: false,
        notificaciones: false,
        priv: false,
        disabled: false
        }
    },


    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageUrl !== '' &&
          this.description !== ''
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
      }
    },


     methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }

        //Tania:
        if(!this.image){
          return 
        }

        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.image,
          description: this.description,
          date: this.submittableDateTime
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      },

      //TANIA:
      onPickFile(){
        this.$refs.fileImput.click();
      },
      onFilePicked(event){
        const files = event.target.files
        let filename = files[0].name;
        if(filename.lastIndexOf('.') <=0) {
          return alert('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () =>{
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      }
    }
}
</script>

<style scoped lang="scss">
    .cuerpo{
        display: flex;
        //flex-wrap: wrap;
        flex-direction: row;
        margin: 0 auto 30px;
        margin-top: 30px;
        max-width: 900px; 
        position: relative;
        align-items: center;
    }
    .avatar{
        //flex: 50%;
        margin-left: 20px;
        margin-right: 15px;
        position: relative;
        text-align:right;
        align-items: center;
    }
    #texto  {
        //flex: 50%;
        margin-left: 15px;
        text-align: left;
        word-wrap: break-word;   
    }
    #nombre{
        display: flex;
        align-items: center;
        text-align:left;
       
    }
    .v-application .ma-2 {
        margin-left: 15px !important;
    }
</style>