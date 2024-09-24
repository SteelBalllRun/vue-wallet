<template>
  <div id="app">
    <div style="background-color: black;">
      <img width="82" height="36" src="data:image/png;base64,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">
    </div>
    <TGSDK ref="tg"/>
    <el-container v-loading="!!!loaded">
      <el-header v-show="address && address.length">
        <el-button @click="pasteFromClick" type="text">{{address}}</el-button>
      </el-header>
      <el-main v-show="path && path.length">
        <div style="position: relative;top: 20px;">
          {{path}}
        </div>
        <div style="position: relative;top: 20px;" v-show="mnemonicList && mnemonicList.length">
          <el-tag v-for="item of mnemonicList" v-bind:key="item">{{item}}</el-tag>
        </div>
      </el-main>
      <el-footer>
        <el-button v-show="loaded" type="primary" icon="el-icon-refresh" @click="generateProxy">生成钱包</el-button>
        <el-button v-show="loaded" type="primary" icon="el-icon-download" @click="importWallet">导入钱包</el-button>
        <el-button v-show="loaded" type="primary" icon="el-icon-download" @click="cleanStage">重置状态</el-button>
        <el-button v-show="loaded" type="primary" icon="el-icon-edit" @click="sendSignRequest">请求签名</el-button>
        <el-input type="textarea" :rows="5" placeholder="signResult" v-model="signResult"></el-input>
      </el-footer>
    </el-container>
  </div>
</template>


<script>
import TGSDK from './components/TGSDK'
import {generateEVM, importEVM} from './lib/wallet'
export default {
  name: 'App',
  data () {
    return {
      signResult: '',
      waitingResult: false,
      connected: false,
      loaded: false,
      address: '',
      mnemonic: '',
      mnemonicList:[],
      path:''
    }
  },
  created(){
    //TODO: 
    console.log('app created!!!!!!')
    // visible change
    document.addEventListener('visibilitychange', ()=>{
      if (document.visibilityState == 'visible') {
        console.log('visible again!')
      }
    })
    // uid
    var userInfo = Telegram.WebApp.initDataUnsafe.user
    if (!userInfo) {
      userInfo = {id: '123'}
    }
    let client_id = userInfo.id
    global.ws = new WebSocket(`ws://134.175.70.190/pchan/ws/${client_id}`)
    ws.onopen = ()=>{
      console.log('连接ws成功')
      // this.$message({
      //     type: 'success',
      //     message: '连接ws成功'
      //   })
    }
    ws.onmessage = (event)=>{
      this.connected = true
      this.$message({
          type: 'success',
          message: `收到推送${event}`
        })
    }


    const eventSource = new EventSource(`http://134.175.70.190/pchan/sse?uid=${client_id}`);
    eventSource.onopen = () => {
      console.log(`content update info:${client_id}`)
    }

    eventSource.addEventListener("signIncome", (event)=>{
      console.log(event.data)
      let coords = JSON.parse(event.data);
      console.log('LocationUpdate', coords);
      this.signResult = coords.signSave
      if (this.waitingResult && this.signResult.length) {
        fetch(`http://134.175.70.190/pchan/consumeSign?uid=${client_id}`) // api for the get request
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.signSave && data.signSave.length) {
            this.signResult = data.signSave
            this.waitingResult = false;
            this.$message({
              type: 'success',
              message: `获得签名结果: ${data.signSave}`
            })
          }
        });
      }
    })

    eventSource.onerror = (error) => {
      console.error('EventSource failed', error)
      eventSource.close()
    }

    function sendMessage(event) {
      var userInfo = Telegram.WebApp.initDataUnsafe.user
      if (!userInfo) {
        userInfo = {id: '123'}
      }
      let uid = userInfo.id
      ws.send(`${uid}`)
    }
  },
  mounted(){
    const inputParam = Telegram.WebApp.initDataUnsafe.start_param
    var userInfo = Telegram.WebApp.initDataUnsafe.user
    if (!userInfo) {
      userInfo = {id: '123'}
    }
    // 0. pull signed result
    //let interval = setInterval(() => {
    //  if (this.waitingResult) {
    //    // send request 
    //    fetch(`http://134.175.70.190/pchan/querySign?uid=${userInfo.id}`) // api for the get request
    //    .then(response => response.json())
    //    .then(data => {
    //      console.log(data)
    //      if (data.signSave && data.signSave.length) {
    //        clearInterval(interval);
    //        this.signResult = data.signSave
    //        this.waitingResult = false;
    //        this.$message({
    //          type: 'success',
    //          message: `获得签名结果: ${data.signSave}`
    //        })
    //      }
    //    });
    //  }
    //}, 1000);

    // 1. check init data first
    console.log(Telegram.WebApp.initDataUnsafe)
    if (userInfo && inputParam && inputParam.length) {
      console.log(`get input wallet phrases:${inputParam}`)
      this.$confirm(`导入钱包将替换掉当前tg内生成的HD钱包(如果已生成过tg hd钱包)，是否继续?`, '注意', {
        confirmButtonText: '导入',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        let mnemonic = inputParam.replaceAll('_', ' ')
        var uid = userInfo.id
        var walletInfo = importEVM("60", uid, mnemonic)
        this.loaded = true
        this.mnemonic = walletInfo.mnemonic.phrase
        this.address = walletInfo.address
        this.path = walletInfo.mnemonic.path
        this.mnemonicList = this.mnemonic.split(' ').map((word, idx)=>(idx+1).toString() + "." + word)
        this.$refs.tg.saveGeneratedWallet(this.mnemonic, this.address, this.path)
        this.$message({
          type: 'success',
          message: '导入成功'
        })
        this.$refs.tg.hideLinkButton(false)
      }).catch((err)=>{
        this.$message({
          type:'info',
          message: `取消导入钱包:${err}`
        })
      })
      return
    }
    
    this.$refs.tg.resumeWalletInfo((err, walletInfoList)=>{
      this.loaded = true
      if (err) {
        console.log(`no wallet for currentUser:${walletInfoList[0]}`)
        return
      }
        this.mnemonic = walletInfoList[0]
        this.address = walletInfoList[1]
        this.path = walletInfoList[2]
        this.mnemonicList = this.mnemonic.split(' ').map((word, idx)=>(idx+1).toString() + "." + word)
        global.currentWallet = {
          mnemonic: {
            phrase: this.mnemonic,
            path: this.path
          },
          address: this.address
        }
      this.$refs.tg.hideLinkButton(false)
    })
    this.$refs.tg.hideLinkButton(true)
  },
  methods: {
    generateProxy() {
      let generateWallet = ()=>{
        console.log('wallet generate called')
        let generate = (uid) => {
          var walletInfo = generateEVM('60', uid)
          global.currentWallet = walletInfo
          this.mnemonic = walletInfo.mnemonic.phrase
          this.address = walletInfo.address
          this.path = walletInfo.mnemonic.path
          this.mnemonicList = this.mnemonic.split(' ').map((word, idx)=>(idx+1).toString() + "." + word)
          this.$refs.tg.saveGeneratedWallet(this.mnemonic, this.address, this.path)
          console.log(walletInfo)
          return walletInfo
        }

        if (Telegram.WebApp.initDataUnsafe.user) {
          var uid = Telegram.WebApp.initDataUnsafe.user.id
          generate(uid)
        } else {
          this.$alert('!!!!NOT IN TELEGRAM EVN!!!!','WARNING',{
            confirmButtonText: 'CONTINUE',
            callback: action => {
              this.$message(
                {type: 'info', message:`action:${action}`}
              )
              var uid = "123456"
              generate(uid)
            },
          })
        }
        this.$refs.tg.hideLinkButton(false)
      }

      if (this.address && this.address.length) {
          this.$alert('!WILL CLEAN CURRENT WALLET IN TG!\n','WARNING',{
            confirmButtonText: 'GET A NEW ONE',
            callback: action => {
              generateWallet()
            },
          })
        } else {
          generateWallet()
        }
    },
    importWallet () {
      this.$message(
              {type: 'Guide', message:`LCQ Okx测试包中点击账号的发送按钮，通过deeplink会拉回到telegram中,实现钱包导入`}
            )
    },
    cleanStage() {
      this.$refs.tg.cleanStorage((err, res)=>{
        currentWallet = null
        this.path = ""
        this.address = ""
        this.mnemonic = ""
        this.mnemonicList = []
        console.log("clean storage")
      })
      this.$refs.tg.hideLinkButton(true)
    },
    pasteFromClick() {
        this.$message({
          type: 'success',
          message: '钱包信息已复制到剪贴板'
        })
    },
    sendSignRequest() {
      var userInfo = Telegram.WebApp.initDataUnsafe.user
      if (!!!userInfo) {
        userInfo = {
          uid: '123'
        }
      }
      var uid = userInfo.id
      this.signResult = ''
      window.open(`okx://wallet/nft/featured?jumpType=testTGLink&uid=${uid}`)
      this.waitingResult = true
      // 0. pull signed result
      //let interval = setInterval(() => {
      //  if (this.waitingResult) {
      //    // send request 
      //    fetch(`http://134.175.70.190/pchan/querySign?uid=${userInfo.id}`) // api for the get request
      //    .then(response => response.json())
      //    .then(data => {
      //      console.log(data)
      //      if (data.signSave && data.signSave.length) {
      //        clearInterval(interval);
      //        this.signResult = data.signSave
      //        this.waitingResult = false;
      //        this.$message({
      //          type: 'success',
      //          message: `获得签名结果: ${data.signSave}`
      //        })
      //      }
      //    });
      //  }
      //}, 1000);
    }
  },
  components: {
    TGSDK
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
</style>
