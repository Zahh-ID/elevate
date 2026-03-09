export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Department {
  label: string;
  members: TeamMember[];
}

export const departments: Department[] = [
  {
    label: "Leadership",
    members: [
      {
        name: "Paul Fajar",
        role: "Chief Executive Officer",
        image: "/team/PaulFajarCEO.svg",
      },
    ],
  },
  {
    label: "Hackers",
    members: [
      {
        name: "Syahruzzahid",
        role: "Tech Lead",
        image: "/team/SyahruzzahidHACKERS.svg",
      },
      {
        name: "Risca Revan",
        role: "Developer",
        image: "/team/RiscaRevanHACKERS.svg",
      },
    ],
  },
  {
    label: "Hipsters",
    members: [
      {
        name: "Naura Yumna",
        role: "Creative Lead",
        image: "/team/NauraYumnaHIPSTER.svg",
      },
      {
        name: "Rafly Althar",
        role: "Designer",
        image: "/team/RaflyAltharHIPSTER.svg",
      },
    ],
  },
];
