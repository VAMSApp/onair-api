

export interface Company {
  Id: string
  WorldId: string
  Name: string
  AirlineCode: string
  LastConnection: string
  LastReportDate: string
  Reputation: number
  CreationDate: string
  DifficultyLevel: number
  UTCOffsetinHours: number
  Paused: boolean
  Level: number
  LevelXP: number
  TransportEmployeeInstant: boolean
  TransportPlayerInstant: boolean
  ForceTimeInSimulator: boolean
  UseSmallAirports: boolean
  UseOnlyVanillaAirports: boolean
  EnableSkillTree: boolean
  CheckrideLevel: number
  EnableLandingPenalities: boolean
  EnableEmployeesFlightDutyAndSleep: boolean
  AircraftRentLevel: number
  EnableCargosAndChartersLoadingTime: boolean
  InSurvival: boolean
  PayBonusFactor: number
  EnableSimFailures: boolean
  DisableSeatsConfigCheck: boolean
  RealisticSimProcedures: boolean
  TravelTokens: number
  SkillTreeResetCount: number
  IndustryPoints: number
  TotalIndustryPoints: number
  TotalContractsCompleted: number
  TotalContractsEarnedCredits: number
  CompanyType: number
  AutoUnloadMerchandises: boolean
  ExcludeAirportsNotInSimbrief: boolean
  DisableFlightScoring: boolean
  EnableFlightScoringLights: boolean
  ManagementMode: number
  IsAdvancedManagementModeUnlocked: boolean
}
