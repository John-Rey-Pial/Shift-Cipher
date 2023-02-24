<template>
    <div>
        <img src="../assets/mortal-encryption.png" alt="" class="background" />

        <div style="position: relative; display: flex">
            <div style="flex: 40%">
                <p class="shift yellow-font">Shift Cipher</p>
                <p class="narrative">
                    If you have a message you want to transmit securely, you can
                    encrypt it (translate it into a secret code). One of the
                    simplest ways to do this is with a shift cipher. Famously,
                    Julius Caesar used this type of cipher when sending messages
                    to his military commanders.
                    <br />
                    A shift cipher involves replacing each letter in the message
                    by a letter that is some fixed number of positions further
                    along in the alphabet. We’ll call this number the encryption
                    key. It is just the length of the shift we are using.
                </p>

                <div style="display: flex">
                    <v-text-field
                        label="Your Data Here"
                        outlined
                        color="#d9a60b"
                        dark
                        autofocus
                        v-model="message"
                        style="
                            margin-left: 100px;
                            margin-right: 20px;
                            margin-top: 10px;
                            flex: 90%;
                        "
                    ></v-text-field>
                    <v-text-field
                        label="Key"
                        outlined
                        color="#d9a60b"
                        dark
                        style="margin-top: 10px; margin-right: 230px"
                        type="number"
                        max="25"
                        v-model="key"
                    ></v-text-field>
                </div>

                <div>
                    <v-btn
                        variant="outlined"
                        color="#d9a60b"
                        style="width: 350px; height: 50px"
                        @click="
                            encrypt_dialog = true;
                            encrypt(message, key);
                        "
                        class="toggle-buttons"
                    >
                        encryption
                    </v-btn>

                    <v-dialog v-model="encrypt_dialog" width="auto">
                        <v-card>
                            <v-card class="mk-dialog">
                                <div style="padding: 135px"></div>
                                <div
                                    style="
                                        padding: 50px;
                                        margin-left: 60px;
                                        margin-right: 60px;
                                        background-color: transparent;
                                        border: grey solid 2px;
                                        text-align: center;
                                        color: white;
                                        font-size: 30px;
                                    "
                                >
                                    {{ code }}
                                </div>
                            </v-card>
                        </v-card>
                    </v-dialog>
                </div>
                <div>
                    <v-btn
                        variant="outlined"
                        color="white"
                        style="width: 350px; height: 50px"
                        @click="
                            decrypt_dialog = true;
                            decrypt(message, key);
                        "
                        class="toggle-buttons black--text"
                    >
                        decryption
                    </v-btn>

                    <v-dialog v-model="decrypt_dialog" width="auto">
                        <v-card>
                            <v-card class="mk-dialog-dec">
                                <div style="padding: 135px"></div>
                                <div
                                    style="
                                        padding: 50px;
                                        margin-left: 60px;
                                        margin-right: 60px;
                                        background-color: transparent;
                                        border: grey solid 2px;
                                        text-align: center;
                                        color: white;
                                        font-size: 30px;
                                    "
                                >
                                    {{ code }}
                                </div>
                            </v-card>
                        </v-card>
                    </v-dialog>
                </div>
            </div>
            <div class="figure">
                <div>
                    <div style="display: flex">
                        <p class="yellow-font nav-top"><strong>2232</strong></p>
                        <p class="nav-top white--text">Information</p>
                        <p class="nav-top white--text">Assurance</p>
                        <p class="nav-top white--text">Security</p>
                    </div>
                    <img
                        style="margin-left: 100px; position: fixed"
                        src="../assets/kitana.png"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // encryptMes: "",
            // encryptKey: "",
            // encryptCode: "",
            // decryptCode: "",
            // decryptKey: "",
            // decryptMes: "",
            encrypt_dialog: false,
            decrypt_dialog: false,
            message: "",
            key: "",
            code: "",
        };
    },
    methods: {
        encrypt(message, key) {
            this.code = "";
            let fcode = "";
            let alb = "abcdefghijklmnopqrstuvwxyz";

            if (key > 25) {
                return (this.code = "Key must be < 26. Try Again.");
            }
            for (let i = 0; i < message.length; i++) {
                if (message.charAt(i) === " ") {
                    fcode += " ";
                    continue;
                } else if (
                    message.charAt(i) === message.charAt(i).toUpperCase()
                ) {
                    fcode += alb
                        .charAt(
                            parseInt(
                                (alb.indexOf(message.charAt(i).toLowerCase()) +
                                    parseInt(key)) %
                                    26
                            )
                        )
                        .toUpperCase();

                    continue;
                }
                fcode += alb.charAt(
                    parseInt(
                        (alb.indexOf(message.charAt(i)) + parseInt(key)) % 26
                    )
                );
            }
            this.code = fcode;
        },
        decrypt(message, key) {
            this.code = "";
            let fcode = "";
            let alb = "abcdefghijklmnopqrstuvwxyz";

            if (key > 25) {
                return (this.code = "Key must be < 26. Try Again.");
            }
            for (let i = 0; i < message.length; i++) {
                if (message.charAt(i) === " ") {
                    fcode += " ";
                    continue;
                } else if (
                    message.charAt(i) === message.charAt(i).toUpperCase()
                ) {
                    fcode += alb
                        .charAt(
                            ((parseInt(
                                alb.indexOf(message.charAt(i).toLowerCase()) -
                                    parseInt(key)
                            ) %
                                26) +
                                26) %
                                26
                        )
                        .toUpperCase();

                    continue;
                }
                fcode += alb.charAt(
                    ((parseInt(alb.indexOf(message.charAt(i)) - parseInt(key)) %
                        26) +
                        26) %
                        26
                );
            }
            this.code = fcode;
        },
    },
};
</script>

<style scoped>
.background {
    position: fixed;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.figure {
    flex: 50%;
    width: 50px;
}
.nav-top {
    margin-top: 70px;
    font-size: 20px;
    margin-right: 140px;
}

.yellow-font {
    color: #d9a60b;
}
.shift {
    margin-left: 100px;
    margin-top: 250px;
    font-size: 35px;
    font-family: "Times New Roman", Times, serif;
}
.narrative {
    color: white;
    font-size: 11px;
    margin-left: 100px;
    text-align: justify;
}
.encryption {
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 50px;
}
.toggle-buttons {
    margin-left: 100px;
    size: 400px;
    color: white;
    margin-top: 20px;
}
.mk-dialog-dec {
    background-image: url(@/assets/mk-dialog-dec.png);
    width: 700px;
    height: 450px;
    background-size: cover;
}
.mk-dialog {
    background-image: url(@/assets/mk-dialog.png);
    width: 700px;
    height: 450px;
    background-size: cover;
}
</style>
