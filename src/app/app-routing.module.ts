import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sing-in',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'add-beneficiary',
    loadChildren: () => import('./add-beneficiary/add-beneficiary.module').then( m => m.AddBeneficiaryPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'fund-transfer',
    loadChildren: () => import('./fund-transfer/fund-transfer.module').then( m => m.FundTransferPageModule)
  },
  {
    path: 'fund-transfer-options',
    loadChildren: () => import('./fund-transfer-options/fund-transfer-options.module').then( m => m.FundTransferOptionsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./loan/loan.module').then( m => m.LoanPageModule)
  },
  {
    path: 'nearby-bank',
    loadChildren: () => import('./nearby-bank/nearby-bank.module').then( m => m.NearbyBankPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'sing-in',
    loadChildren: () => import('./sing-in/sing-in.module').then( m => m.SingInPageModule)
  },
  {
    path: 'statement',
    loadChildren: () => import('./statement/statement.module').then( m => m.StatementPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'thumb-impression',
    loadChildren: () => import('./thumb-impression/thumb-impression.module').then( m => m.ThumbImpressionPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'transfered-successfully',
    loadChildren: () => import('./transfered-successfully/transfered-successfully.module').then( m => m.TransferedSuccessfullyPageModule)
  },
  {
    path: 'upload-deposite',
    loadChildren: () => import('./upload-deposite/upload-deposite.module').then( m => m.UploadDepositePageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'list-of-deposites',
    loadChildren: () => import('./list-of-deposites/list-of-deposites.module').then( m => m.ListOfDepositesPageModule)
  },
  {
    path: 'loan-info',
    loadChildren: () => import('./loan-info/loan-info.module').then( m => m.LoanInfoPageModule)
  },
  {
    path: 'imps',
    loadChildren: () => import('./imps/imps.module').then( m => m.ImpsPageModule)
  },
  {
    path: 'loan-statement',
    loadChildren: () => import('./loan-statement/loan-statement.module').then( m => m.LoanStatementPageModule)
  },
  {
    path: 'change-language',
    loadChildren: () => import('./change-language/change-language.module').then( m => m.ChangeLanguagePageModule)
  },
  {
    path: 'external-validation',
    loadChildren: () => import('./external-validation/external-validation.module').then( m => m.ExternalValidationPageModule)
  },
  {
    path: 'password-validation',
    loadChildren: () => import('./password-validation/password-validation.module').then( m => m.PasswordValidationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
