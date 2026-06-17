import { createSlice } from '@reduxjs/toolkit'
import { NewsItem } from '../types'

interface NewsState {
  items: NewsItem[]
}

const initialState: NewsState = {
  items: [
    {
      id: 1,
      title: 'Maktabimizda yangi laboratoriya ochildi',
      description: 'Zamonaviy jihozlar bilan ta\'minlangan fizika laboratoriyasi o\'quvchilarga xizmat qiladi.',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'O\'qituvchilarimiz viloyat tanlovida g\'olib bo\'ldi',
      description: 'Bizning o\'qituvchilarimiz \"Yil o\'qituvchisi\" tanlovida yuqori o\'rinlarni egalladi.',
      date: '2024-01-10',
    },
    {
      id: 3,
      title: 'Sport musobaqalari boshlandi',
      description: 'Maktabimizda yillik sport musobaqalari start oldi. Barcha o\'quvchilar ishtirok etishi mumkin.',
      date: '2024-01-05',
    },
    {
      id: 4,
      title: 'Kitobxonlik haftaligi o\'tkazildi',
      description: 'O\'quvchilar o\'rtasida kitobxonlik madaniyatini oshirish maqsadida haftalik tadbir o\'tkazildi.',
      date: '2023-12-20',
    },
    {
      id: 5,
      title: 'Yangi o\'quv yili boshlandi',
      description: '2023-2024 o\'quv yili marosimli ravishda boshlandi. Barcha o\'quvchilarga muvaffaqiyat tilaymiz.',
      date: '2023-09-01',
    },
    {
      id: 6,
      title: 'Maktabimiz 50 yilligini nishonladi',
      description: 'Maktabimizning 50 yillik yubileyi keng qamrovli tadbir bilan nishonlandi.',
      date: '2023-05-20',
    },
  ],
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
})

export default newsSlice.reducer
