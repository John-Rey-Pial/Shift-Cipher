<template>
    <div>
        <img src="../assets/pastel.jpg" alt="" class="background" />

        <div style="position: relative; display: flex">
            <div style="flex: 40%">
                <h1 class="shift">SHIFT CIPHER</h1>

                <div style="display: flex">
                    <v-text-field
                        label="Your Data Here"
                        outlined
                        autofocus
                        v-model="message"
                        style="
                            margin-left: 100px;
                            margin-right: 20px;
                            margin-top: 30px;
                            flex: 90%;
                        "
                    ></v-text-field>
                    <v-text-field
                        label="Key"
                        outlined
                        style="margin-top: 30px; margin-right: 230px"
                        type="number"
                        max="25"
                        v-model="key"
                    ></v-text-field>
                </div>

                <div>
                    <v-btn
                        variant="outlined"
                        color="blue"
                        dark
                        style="width: 350px; height: 50px"
                        @click="
                            encrypt(message, key);
                            decrypt(message, key);
                        "
                        class="toggle-buttons"
                    >
                        ENCRYPT/DECRYPT
                    </v-btn>
                </div>
                <div
                    style="
                        margin-left: 500px;
                        margin-top: 50px;
                        font-size: 20px;
                    "
                >
                    ENCRYPTED MESSAGE: {{ encode }}
                    <br />
                    DECRYPTED MESSAGE: {{ decode }}
                    <br />
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

            message: "",
            key: "",
            encode: "",
            decode: "",
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
            this.encode = fcode;
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
            this.decode = fcode;
        },
    },
};
</script>
<style>
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
    margin-left: 500px;
    size: 400px;
    color: white;
    margin-top: 20px;
}
</style>
