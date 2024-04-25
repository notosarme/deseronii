const hash = "/series/"
const seriesData = [
  {
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5b5c25d-37ef-4e54-91a5-f9eb444cf012/dgbrcjc-ca2f88af-1e18-4220-8927-97338134a2fc.png/v1/fit/w_600,h_1800,q_70,strp/steel_miku_by_dededes_dgbrcjc-300w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5MCIsInBhdGgiOiJcL2ZcL2E1YjVjMjVkLTM3ZWYtNGU1NC05MWE1LWY5ZWI0NDRjZjAxMlwvZGdicmNqYy1jYTJmODhhZi0xZTE4LTQyMjAtODkyNy05NzMzODEzNGEyZmMucG5nIiwid2lkdGgiOiI8PTIxMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.laDT7ryheQBbncmvEb1_Tb9DkHv31_7WEguw5HwtfTs",
    caption: "Vocaloid",
    link: hash + "vocaloid",
  },
  {
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5b5c25d-37ef-4e54-91a5-f9eb444cf012/dfzrkjt-b4ea0874-fe1f-468c-98ae-dfdd6fcd8eb1.png/v1/fit/w_750,h_570,q_70,strp/greet_3_sea_birds_by_dededes_dfzrkjt-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk0OCIsInBhdGgiOiJcL2ZcL2E1YjVjMjVkLTM3ZWYtNGU1NC05MWE1LWY5ZWI0NDRjZjAxMlwvZGZ6cmtqdC1iNGVhMDg3NC1mZTFmLTQ2OGMtOThhZS1kZmRkNmZjZDhlYjEucG5nIiwid2lkdGgiOiI8PTI1NjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ND38q99bfKUM3ebEMVaVhXJx_DYM3-GHlRNmCISyJ9o",
    caption: "Kirby",
    link: "/series-test",
  },
  {
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5b5c25d-37ef-4e54-91a5-f9eb444cf012/df7lku1-f185658e-4bd4-499b-8927-5a9b46c072f2.png/v1/fill/w_417,h_500,q_70,strp/pro_memoria_002_by_dededes_df7lku1-250t-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwMCIsInBhdGgiOiJcL2ZcL2E1YjVjMjVkLTM3ZWYtNGU1NC05MWE1LWY5ZWI0NDRjZjAxMlwvZGY3bGt1MS1mMTg1NjU4ZS00YmQ0LTQ5OWItODkyNy01YTliNDZjMDcyZjIucG5nIiwid2lkdGgiOiI8PTE1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nRbFkuNPcLm6ECQudp62eCifZtZVXTfQQyjUMJUIyp0",
    caption: "Original",
    link: "/series-test",
  },
  {
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5b5c25d-37ef-4e54-91a5-f9eb444cf012/dec36zp-5829fb18-3476-4d31-bd0d-272a8e53f5f5.png/v1/fit/w_828,h_828,q_70,strp/rat_god_by_dededes_dec36zp-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwMiIsInBhdGgiOiJcL2ZcL2E1YjVjMjVkLTM3ZWYtNGU1NC05MWE1LWY5ZWI0NDRjZjAxMlwvZGVjMzZ6cC01ODI5ZmIxOC0zNDc2LTRkMzEtYmQwZC0yNzJhOGU1M2Y1ZjUucG5nIiwid2lkdGgiOiI8PTIwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Rj3phh9xJkkn9xbMyFUDzyRuSZA_w2IxSZLJQLwqBIw",
    caption: "Mad Rat Dead",
    link: "/series-test",
  },
  {
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5b5c25d-37ef-4e54-91a5-f9eb444cf012/dh2yhgk-f92fa8b5-ecfb-45d5-bb81-789792f9939b.png/v1/crop/w_565,h_700,x_0,y_0,scl_0.37666666666667,q_70,strp/temu_blaster_replica_by_dededes_dh2yhgk-350t-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg2MCIsInBhdGgiOiJcL2ZcL2E1YjVjMjVkLTM3ZWYtNGU1NC05MWE1LWY5ZWI0NDRjZjAxMlwvZGgyeWhnay1mOTJmYThiNS1lY2ZiLTQ1ZDUtYmI4MS03ODk3OTJmOTkzOWIucG5nIiwid2lkdGgiOiI8PTE1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ki0YA8iuS5tGGxu3_eyWY2fUh5bcMH3SPXRO_vUgKTE",
    caption: "Splatoon",
    link: "/series-test",
  },
  {
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5b5c25d-37ef-4e54-91a5-f9eb444cf012/devshzs-1f5126f2-a0d2-4ed1-90a3-f8e1bfbc5137.png/v1/fill/w_467,h_700,q_70,strp/toad_and_toadette_by_dededes_devshzs-350t-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjI0OCIsInBhdGgiOiJcL2ZcL2E1YjVjMjVkLTM3ZWYtNGU1NC05MWE1LWY5ZWI0NDRjZjAxMlwvZGV2c2h6cy0xZjUxMjZmMi1hMGQyLTRlZDEtOTBhMy1mOGUxYmZiYzUxMzcucG5nIiwid2lkdGgiOiI8PTE1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LDUOeJ7Jb0UzdjBSaIpYuMXKN96NzPf6GWdK-N_Ew20",
    caption: "Mario",
    link: "/series-test",
  },
  {
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5b5c25d-37ef-4e54-91a5-f9eb444cf012/dg0n91d-6789b78f-0802-46ca-ad4c-791c2fa16e40.png/v1/fill/w_379,h_700,q_70,strp/x_at_the_junction_by_dededes_dg0n91d-350t-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjQ1NCIsInBhdGgiOiJcL2ZcL2E1YjVjMjVkLTM3ZWYtNGU1NC05MWE1LWY5ZWI0NDRjZjAxMlwvZGcwbjkxZC02Nzg5Yjc4Zi0wODAyLTQ2Y2EtYWQ0Yy03OTFjMmZhMTZlNDAucG5nIiwid2lkdGgiOiI8PTEzMjgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3dWWvCPBFqLBuhzdamgnpTuz7ejqcLT8zluZxCVRYnE",
    caption: "Mega Man",
    link: "/series-test",
  },
  {
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5b5c25d-37ef-4e54-91a5-f9eb444cf012/dejjac5-ea808803-9d44-49ea-98fb-c181709743b8.png/v1/fill/w_747,h_700,q_70,strp/angel_in_us_by_dededes_dejjac5-350t-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwMCIsInBhdGgiOiJcL2ZcL2E1YjVjMjVkLTM3ZWYtNGU1NC05MWE1LWY5ZWI0NDRjZjAxMlwvZGVqamFjNS1lYTgwODgwMy05ZDQ0LTQ5ZWEtOThmYi1jMTgxNzA5NzQzYjgucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6cJUrBy-Ph8s2WaHVFD9nExJ84ff88XD0grN5BDH2q0",
    caption: "Cookie Run",
    link: "/series-test",
  },
  {
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5b5c25d-37ef-4e54-91a5-f9eb444cf012/ddmmdwm-3051856e-2e1c-4c98-b7fe-b195f6568329.png/v1/fit/w_600,h_980,q_70,strp/flayn_love_live_by_dededes_ddmmdwm-300w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTgwIiwicGF0aCI6IlwvZlwvYTViNWMyNWQtMzdlZi00ZTU0LTkxYTUtZjllYjQ0NGNmMDEyXC9kZG1tZHdtLTMwNTE4NTZlLTJlMWMtNGM5OC1iN2ZlLWIxOTVmNjU2ODMyOS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.u6ZnG3t65MbJc5sufOpyCOt5fGCOhs4t2KqyA_5iobE",
    caption: "Fire Emblem",
    link: "/series-test",
  },
];

export default seriesData;