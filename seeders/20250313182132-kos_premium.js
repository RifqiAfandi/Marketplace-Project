"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Kos_Premium",
      [
        // Jakarta
        {
          name: "Kos Premium 1",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9803928746,
          city: "Jakarta",
          price: 5000000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 2",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1583499493,
          city: "Jakarta",
          price: 5200000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 3",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 8691109840,
          city: "Jakarta",
          price: 5100000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 4",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 3009263505,
          city: "Jakarta",
          price: 5300000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 5",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 3363046241,
          city: "Jakarta",
          price: 5250000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },

        // Surabaya
        {
          name: "Kos Premium 6",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1392765123,
          city: "Surabaya",
          price: 5100000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 7",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1122334455,
          city: "Surabaya",
          price: 5300000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 8",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9988776655,
          city: "Surabaya",
          price: 5000000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 9",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 7865432109,
          city: "Surabaya",
          price: 4900000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 10",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 5432109876,
          city: "Surabaya",
          price: 5050000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },

        // Bandung
        {
          name: "Kos Premium 11",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9088776655,
          city: "Bandung",
          price: 5150000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 12",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 8776655443,
          city: "Bandung",
          price: 5300000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 13",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1234567890,
          city: "Bandung",
          price: 5250000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 14",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9876543210,
          city: "Bandung",
          price: 5100000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 15",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9632587410,
          city: "Bandung",
          price: 5000000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },

        // Yogyakarta
        {
          name: "Kos Premium 16",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9483726531,
          city: "Yogyakarta",
          price: 4900000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 17",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9123456789,
          city: "Yogyakarta",
          price: 5100000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 18",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 6543217890,
          city: "Yogyakarta",
          price: 4850000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 19",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 7412589630,
          city: "Yogyakarta",
          price: 5000000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 20",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 3584621970,
          city: "Yogyakarta",
          price: 4950000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },

        // Medan
        {
          name: "Kos Premium 21",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9843726510,
          city: "Medan",
          price: 5250000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 22",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9923445234,
          city: "Medan",
          price: 5300000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 23",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 8765432109,
          city: "Medan",
          price: 5100000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 24",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 3541896570,
          city: "Medan",
          price: 5150000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 25",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 7412583690,
          city: "Medan",
          price: 5200000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },

        // Denpasar
        {
          name: "Kos Premium 26",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1198765432,
          city: "Denpasar",
          price: 5000000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 27",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1029384756,
          city: "Denpasar",
          price: 5100000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 28",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9876543210,
          city: "Denpasar",
          price: 4950000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 29",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 8493027614,
          city: "Denpasar",
          price: 4850000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 30",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 3564987250,
          city: "Denpasar",
          price: 5000000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },

        // Semarang
        {
          name: "Kos Premium 31",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1843276541,
          city: "Semarang",
          price: 5100000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 32",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 5467389201,
          city: "Semarang",
          price: 5200000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 33",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 3217896540,
          city: "Semarang",
          price: 5300000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 34",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1278543690,
          city: "Semarang",
          price: 5000000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 35",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 8132754698,
          city: "Semarang",
          price: 4950000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },

        // Makassar
        {
          name: "Kos Premium 36",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 7845123690,
          city: "Makassar",
          price: 5150000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 37",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9023475612,
          city: "Makassar",
          price: 5100000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 38",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1145632790,
          city: "Makassar",
          price: 5250000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 39",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9876543210,
          city: "Makassar",
          price: 5200000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 40",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 5739846123,
          city: "Makassar",
          price: 4950000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },

        // Depok
        {
          name: "Kos Premium 41",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 8376542901,
          city: "Depok",
          price: 4850000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 42",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 6234567890,
          city: "Depok",
          price: 5000000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 43",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9876254310,
          city: "Depok",
          price: 5100000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 44",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 7896541230,
          city: "Depok",
          price: 4950000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 45",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1234567890,
          city: "Depok",
          price: 5000000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },

        // Malang
        {
          name: "Kos Premium 46",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 6483729465,
          city: "Malang",
          price: 4850000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 47",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 5293846172,
          city: "Malang",
          price: 4900000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 48",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 1837462901,
          city: "Malang",
          price: 4750000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 49",
          gender: "Putra",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 6374189025,
          city: "Malang",
          price: 4850000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
        {
          name: "Kos Premium 50",
          gender: "Putri",
          description: "Kos premium dengan fasilitas lengkap dan nyaman",
          phone_number: 9514268370,
          city: "Malang",
          price: 4900000,
          facility: "Wi-Fi, AC, Furnitur premium, Keamanan 24 jam",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Premium.jpg?updatedAt=1742572430868",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Kos_Premium", null, {});
  },
};
