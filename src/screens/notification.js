import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import Logoair from '../assets/minumair.svg'
import Logocalendar from '../assets/calendarNotif.svg'
import Logopromosi from '../assets/promosiNotif.svg'
import Gambar1 from '../assets/trainer.png'
import Gambar2 from '../assets/Produk.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import messaging from '@react-native-firebase/messaging';
import { useEffect,useState } from 'react'
import Models
 from '../models/Models'
import moment from 'moment'
const notification = () => {

    const [notif, setnotif] = useState([])
    useEffect(() => {
        const getNotif = async () => {
          const res = await Models.getNotification();
          if (res.code != '200') {
            // alert(`${res}`);
          } else {
           setnotif(res.data)
           console.log(res.data);
          }
        }
        getNotif()
      }, [])

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
               {notif.map((d,idx)=> {
                   return(
                    <View key={idx} style={styles.container}>
                    <Logoair />
                    <View style={styles.containerteks}>
                        <Text style={styles.judul}>{d.title}</Text>
                        <Text style={styles.waktu}>{moment(d.dateTime).format('DD MMMM YYYY hh:mm')}</Text>
                    </View>
                </View>
                   )
               })}
                {/* <View style={styles.container}>
                    <Logocalendar />
                    <View style={styles.containerteks}>
                        <Text style={styles.judul}>30 menit lagi jadwal gym mu mulai!</Text>
                        <Text style={styles.waktu}>11:00</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Logopromosi />
                    <View style={styles.containerteks}>
                        <Text style={styles.judul}>Promosi WORKD Out</Text>
                        <Text style={styles.waktu}>11:00</Text>
                    </View>
                </View> */}

                <Text style={{
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: 20,
                    marginVertical: 20,
                    marginLeft: 20
                }}>Status Pesanan</Text>

                <View style={styles.container2}>
                    <Image source={Gambar1} style={styles.gambar} />
                    <View style={styles.containerteks2}>
                        <Text style={styles.judul2}>Pembayaran Dikonfirmasi</Text>
                        <Text style={styles.teks}>Pesanan jadwal <Text style={styles.kode}>11nov2021A terkonfirmasi.</Text> Buka dan tunjukkan konfirmasi pembayaran kepada Admin Gym saat hendak memulai Gym.</Text>
                        <Text>28-09-2021     11.15</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <Image source={Gambar2} style={styles.gambar} />
                    <View style={styles.containerteks2}>
                        <Text style={styles.judul2}>Pesanan Diterima</Text>
                        <Text style={styles.teks}>Pembayaran pesanan <Text style={styles.kode}>12345GHU768G6 terkonfirmasi.</Text> Konfirmasi barang sudah diterima</Text>
                        <Text>28-09-2021     11.15</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <Image source={Gambar2} style={styles.gambar} />
                    <View style={styles.containerteks2}>
                        <Text style={styles.judul2}>Pesanan Diterima</Text>
                        <Text style={styles.teks}>Pembayaran pesanan <Text style={styles.kode}>12345GHU768G6 terkonfirmasi.</Text> Konfirmasi barang sudah diterima</Text>
                        <Text>28-09-2021     11.15</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default notification

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        flexDirection: 'row',
        backgroundColor: '#CBF3E8',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    containerteks: {
        marginLeft: 20
    },
    judul: {
        fontSize: 16,
        color: '#253334',
        fontWeight: '700'
    },
    waktu: {
        fontSize: 16,
        color: '#253334',
        fontWeight: '500'
    },
    container2: {
        width: wp('100%'),
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    containerteks2: {
        marginLeft: 10
    },
    gambar: {
        width: 80,
        height: 80
    },
    judul2: {
        fontSize: 16,
        color: '#000',
        fontWeight: '700'
    },
    teks: {
        width: wp('70%'),
        marginVertical: 10,
    },
    kode: {
        color: '#25A7B0'
    }
})
