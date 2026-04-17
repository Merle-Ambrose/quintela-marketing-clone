export function buildAppRoutes({
  Home,
  InterviewGuide,
  AssessmentTechnology,
  CompetencyModel,
  PsychobabbleZone,
  HRDiverse,
  ReducingDiscrimination,
  ProInterview,
  DigitalInterview,
  Contact,
}) {
  return [
    { path: "/", element: <Home /> },
    { path: "/digital-online-interview-builder", element: <InterviewGuide /> },
    { path: "/assessments", element: <AssessmentTechnology /> },
    { path: "/competency-model-library", element: <CompetencyModel /> },
    { path: "/psychobabble-free-zone", element: <PsychobabbleZone /> },
    {
      path: "/articles/how-diverse-are-hr-vendor-executive-teams",
      element: <HRDiverse />,
    },
    {
      path: "/articles/reducing-discrimination-with-digital-interview-guides",
      element: <ReducingDiscrimination />,
    },
    {
      path: "/articles/the-two-ways-digital-interview-guides-keep-you-legally-compliant",
      element: <ProInterview />,
    },
    {
      path: "/articles/interview-like-a-pro-how-to-interview-candidates-with-confidence",
      element: <DigitalInterview />,
    },
    { path: "/contact-us", element: <Contact /> },
  ];
}
