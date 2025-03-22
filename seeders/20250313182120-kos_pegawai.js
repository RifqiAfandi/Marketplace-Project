"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Kos_Pegawai",
      [
        // Jakarta
        {
          name: "Kos Pegawai 1",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9803928746,
          city: "Jakarta",
          price: 2500000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 2",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1583499493,
          city: "Jakarta",
          price: 2600000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 3",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 8691109840,
          city: "Jakarta",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 4",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 3009263505,
          city: "Jakarta",
          price: 2450000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 5",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 3363046241,
          city: "Jakarta",
          price: 2500000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },

        // Surabaya
        {
          name: "Kos Pegawai 6",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1392765123,
          city: "Surabaya",
          price: 2450000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 7",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1122334455,
          city: "Surabaya",
          price: 2500000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 8",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9988776655,
          city: "Surabaya",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 9",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 7865432109,
          city: "Surabaya",
          price: 2350000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 10",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 5432109876,
          city: "Surabaya",
          price: 2300000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },

        // Bandung
        {
          name: "Kos Pegawai 11",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9088776655,
          city: "Bandung",
          price: 2450000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 12",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 8776655443,
          city: "Bandung",
          price: 2550000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 13",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1234567890,
          city: "Bandung",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 14",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9876543210,
          city: "Bandung",
          price: 2350000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 15",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9632587410,
          city: "Bandung",
          price: 2500000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },

        // Yogyakarta
        {
          name: "Kos Pegawai 16",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9483726531,
          city: "Yogyakarta",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 17",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9123456789,
          city: "Yogyakarta",
          price: 2450000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 18",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 6543217890,
          city: "Yogyakarta",
          price: 2350000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 19",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 7412589630,
          city: "Yogyakarta",
          price: 2300000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 20",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 3584621970,
          city: "Yogyakarta",
          price: 2200000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },

        // Medan
        {
          name: "Kos Pegawai 21",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9843726510,
          city: "Medan",
          price: 2550000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 22",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9923445234,
          city: "Medan",
          price: 2600000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 23",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 8765432109,
          city: "Medan",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 24",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 3541896570,
          city: "Medan",
          price: 2500000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 25",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 7412583690,
          city: "Medan",
          price: 2450000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },

        // Denpasar
        {
          name: "Kos Pegawai 26",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1198765432,
          city: "Denpasar",
          price: 2450000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 27",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1029384756,
          city: "Denpasar",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 28",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9876543210,
          city: "Denpasar",
          price: 2300000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 29",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 8493027614,
          city: "Denpasar",
          price: 2250000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 30",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 3564987250,
          city: "Denpasar",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },

        // Semarang
        {
          name: "Kos Pegawai 31",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1843276541,
          city: "Semarang",
          price: 2500000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 32",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 5467389201,
          city: "Semarang",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 33",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 3217896540,
          city: "Semarang",
          price: 2350000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 34",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1278543690,
          city: "Semarang",
          price: 2300000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 35",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 8132754698,
          city: "Semarang",
          price: 2250000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },

        // Makassar
        {
          name: "Kos Pegawai 36",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 7845123690,
          city: "Makassar",
          price: 2500000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 37",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9023475612,
          city: "Makassar",
          price: 2450000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 38",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1145632790,
          city: "Makassar",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 39",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9876543210,
          city: "Makassar",
          price: 2350000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 40",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 5739846123,
          city: "Makassar",
          price: 2300000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },

        // Depok
        {
          name: "Kos Pegawai 41",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 8376542901,
          city: "Depok",
          price: 2200000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 42",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 6234567890,
          city: "Depok",
          price: 2250000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 43",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9876254310,
          city: "Depok",
          price: 2300000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 44",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 7896541230,
          city: "Depok",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 45",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1234567890,
          city: "Depok",
          price: 2350000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },

        // Malang
        {
          name: "Kos Pegawai 46",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 6483729465,
          city: "Malang",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 47",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 5293846172,
          city: "Malang",
          price: 2450000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 48",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 1837462901,
          city: "Malang",
          price: 2300000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 49",
          gender: "Putra",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 6374189025,
          city: "Malang",
          price: 2350000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
        {
          name: "Kos Pegawai 50",
          gender: "Putri",
          description: "Kos pegawai yang nyaman dan strategis",
          phone_number: 9514268370,
          city: "Malang",
          price: 2400000,
          facility: "Wi-Fi, AC, Furnitur lengkap, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Pegawai.jpg?updatedAt=1742572430573",
            createdAt: new Date(), 
            updatedAt: new Date() 
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Kos_Pegawai", null, {});
  },
};
