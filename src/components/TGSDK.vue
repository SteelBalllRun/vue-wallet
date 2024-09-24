<template>
</template>

<script>


export default {
    name:'TGSDK',
    props: {
        uid: String
    },
    methods: {
        hideLinkButton(hide) {
            if (hide) {
                Telegram.WebApp.MainButton.hide()
            } else {
                Telegram.WebApp.MainButton.show()
            }
        },
        saveGeneratedWallet(mnemonic, address, path) {
            var uid = Telegram.WebApp.initDataUnsafe.user.id
            console.log(`with current login tg user:${uid} phrase:${mnemonic}`)
            Telegram.WebApp.CloudStorage.removeItem(uid.toString(), (err, res)=>{
                Telegram.WebApp.CloudStorage.setItem(uid.toString(), mnemonic+'&'+address+'&'+path)
            })
        },
        resumeWalletInfo(result)
        {
            if (!Telegram.WebApp.initDataUnsafe.user) {
                return result(false, '')
            }
            var uid = Telegram.WebApp.initDataUnsafe.user.id
            console.log(`with current login tg user:${uid}`)
            Telegram.WebApp.CloudStorage.getItem(uid.toString(), (err, res)=>{
                if (!err) {
                    // get mnemonic
                    console.log(`get cached wallet:${res}`)
                    return result(false, res.split('&'))
                } else {
                    // no cache
                    console.log('no cached wallet')
                    return result(true, [uid])
                }
            })
        },
        cleanStorage(result)
        {
            var uid = Telegram.WebApp.initDataUnsafe.user.id
            Telegram.WebApp.CloudStorage.removeItem(uid.toString(), (err, res)=>{
                console.log('clean storage finished')
                result(err, res)
            })

        }
    },
    mounted(){
        var webApp = Telegram.WebApp
        // Init TWA
        Telegram.WebApp.ready()
        // Event occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
        Telegram.WebApp.onEvent('themeChanged', function() {
            document.documentElement.className = Telegram.WebApp.colorScheme;
        })
        // Show main button
        Telegram.WebApp.MainButton.setParams({
            text: 'Link OKX'
        })
        Telegram.WebApp.MainButton.onClick(function () {
            // Telegram.WebApp.showAlert('Main Button was clicked')
            // Use deeplink

            if (currentWallet.mnemonic) {
                var uid = webApp.initDataUnsafe.user.id
                var phrase = currentWallet.mnemonic.phrase.replaceAll(" ", "_")
                console.log(`try open:${phrase}`);
                // window.open(`okex://metaX/wallet/home/tgImport?idx=${uid}&mn=${phrase}`);
                window.open(`file://`);
                // window.open(`googlechrome://`);
                // window.open(`okex://main/wc?uri=wc:bd1a5f9aef5dffc5a61d51eefe23e5d79dae3f7847b4960f60a8767e41aff487@2?relay-protocol=irn&symKey=d870213fc4767652ef9c20f85b6feab6021fe07d0459d09d644a904137fa5250`)
            } else {
                Telegram.WebApp.showPopup("Notice", "create a wallet first plz");
            }
        })

        // 增删查
        Telegram.WebApp.onEvent('themeChanged', function() {
            document.body.setAttribute('style', '--bg-color:' + Telegram.WebApp.backgroundColor)
        })
    }
}
</script>