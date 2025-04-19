# The Ideal
Create an end-to-end encrypted cross-platform to-do app with account-wide 
synchronisation and 2FA for ultimate security and privacy!

# Features
> Stars reflect importance
- Tasks *****
- Subtasks ****
- Folders ***
- Subfolders **
- End-to-End Encryption *****
- Account-Wide Synchronisation *****
- Password lock/unlock *****
- Biometrics unlock for mobile ***
- System auth (e.g. biometrics) unlock for desktop **
- 2-Factor Authentication *****

# Tech Stack
- **Frontend**: [TypeScript](https://www.typescriptlang.org/)/[React](https://react.dev/)
  1. **Web**: [NEXT.js SPA](https://nextjs.org/docs/app/guides/single-page-applications)
  2. **Mobile** (iOS and Android): [NEXT.js + Tauri](https://v2.tauri.app/start/frontend/nextjs/)
  3. **Desktop** (Windows, MacOS, and Linux): 
    [Next.js + Capacitator](https://capgo.app/blog/building-a-native-mobile-app-with-nextjs-and-capacitor)
- **Backend**: [C# (.NET WebAPI)](https://dotnet.microsoft.com/en-us/apps/aspnet/apis)
- **Database**: [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)
- **Authentication & 2FA**: [Amazon Cognito](https://aws.amazon.com/cognito/)
- **Containeris & Orchestration**:
  - *Local*: [Docker](https://www.docker.com/) & [Kubernetes](https://kubernetes.io/)
  - *Cloud*: [EC2](https://aws.amazon.com/ec2/) & [EKS](https://aws.amazon.com/eks/)

# Pricing (Tiers)
> Subject to Change
- Monthly subscription models to both cover the storage used and to profit.
## Free (?)
- No account needed.
- No folders, no synchronisation, single device.
- Files kept at local database.
## Essentials
- Around £1.99/month.
- Allows for a single device with encrypted online backups. 
  - OR allows 2 devices at maximum for phone and laptop/pc.
  - OR allows multi-device and synchronisation but lacks certain features such
    as folders or subfolders.
## Premium
- Around £3.99/month.
- Offers full functionality.

# Development Stages
## Design
1. Design the UI for web, desktop, and mobile devices using Figma for all tiers.
2. Save the design in an accessible place.
## Web App
1. Free Tier Features
  - Tasks
  - Subtasks
  - Lock/unlock with password
  - Biometrics unlock on mobile
  - 2-factor authentication
2. Essentials Tier Features
  > On top of Free Tier Features:
  - Folders
  - Subfolders
3. Premium Features
  > On top of Essentials Tier Features:
  - Account-Wide Synchronisation
  - End-to-End Encryption
## Cross-platform Support
1. Use React Native to port application to mobile
2. Use Electron to port application to desktops
### Additional Off-Web Features
- System authentication unlock
  > i.e. user/phone password or biometrics

# Resources
[How to Build a Cross-Platform Application with Next.js and Tauri](https://www.freecodecamp.org/news/build-a-cross-platform-app-with-next-and-tauri/)

