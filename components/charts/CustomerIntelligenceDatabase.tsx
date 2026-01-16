'use client'

import { useState } from 'react'

// Proposition 1 Data Interface - Basic Customer Info + Contact
interface Proposition1Data {
  sNo: number
  // Customer Information
  customerOrganizationName: string
  parentGroupHoldingCompany: string
  country: string
  cityHqKeyOffice: string
  coreIndustry: string // Tech / BFSI / Retail / Manufacturing / Govt / Others
  companySize: string // Employees / Revenue band
  estimatedAdvocacyUserBase: string // target employees / ambassadors
  // Contact Details
  keyContactPerson: string
  designationDepartment: string
  emailAddress: string
}

// Proposition 2 Data Interface - Prop 1 + Extended Contact + Needs & Pain Points
interface Proposition2Data extends Proposition1Data {
  // Extended Contact Details
  phoneWhatsAppNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Needs & Pain Points
  primaryNeedFocus: string // Software / Services / Both
  keyProductNeeds: string // content distribution, gamification, analytics, integrations
  keyServiceNeeds: string // implementation, onboarding, training, managed program, compliance
}

// Proposition 3 Data Interface - Prop 2 + Purchasing Behaviour + CMI Insights
interface Proposition3Data extends Proposition2Data {
  // Purchasing Behaviour
  decisionMakers: string // HR, Internal Comms, Marketing, IT, Procurement, etc
  currentEmployeeAdvocacySetup: string // Existing Tool
  buyingContractingModel: string // pilot / subscription / enterprise license / multi-year
  // CMI Insights
  customerBenchmarkingSummary: string // peer group, similar orgs, suggested angle
}

// Sample data for Proposition 1
const proposition1Data: Proposition1Data[] = [
  {
    sNo: 1,
    customerOrganizationName: 'Accenture',
    parentGroupHoldingCompany: 'Accenture PLC',
    country: 'United States',
    cityHqKeyOffice: 'Chicago, IL',
    coreIndustry: 'Tech',
    companySize: '700,000+ employees',
    estimatedAdvocacyUserBase: '5,000 - 10,000',
    keyContactPerson: 'Sarah Johnson',
    designationDepartment: 'VP Internal Communications',
    emailAddress: 's.johnson@accenture.com'
  },
  {
    sNo: 2,
    customerOrganizationName: 'HSBC Holdings',
    parentGroupHoldingCompany: 'HSBC Group',
    country: 'United Kingdom',
    cityHqKeyOffice: 'London',
    coreIndustry: 'BFSI',
    companySize: '200,000+ employees',
    estimatedAdvocacyUserBase: '2,000 - 5,000',
    keyContactPerson: 'James Mitchell',
    designationDepartment: 'Head of Employee Engagement',
    emailAddress: 'j.mitchell@hsbc.com'
  },
  {
    sNo: 3,
    customerOrganizationName: 'Walmart Inc.',
    parentGroupHoldingCompany: 'Walmart Inc.',
    country: 'United States',
    cityHqKeyOffice: 'Bentonville, AR',
    coreIndustry: 'Retail',
    companySize: '2,100,000+ employees',
    estimatedAdvocacyUserBase: '10,000 - 25,000',
    keyContactPerson: 'Michael Torres',
    designationDepartment: 'Director of Corporate Communications',
    emailAddress: 'm.torres@walmart.com'
  },
  {
    sNo: 4,
    customerOrganizationName: 'Siemens AG',
    parentGroupHoldingCompany: 'Siemens Group',
    country: 'Germany',
    cityHqKeyOffice: 'Munich',
    coreIndustry: 'Manufacturing',
    companySize: '300,000+ employees',
    estimatedAdvocacyUserBase: '3,000 - 8,000',
    keyContactPerson: 'Anna Schmidt',
    designationDepartment: 'Global HR Director',
    emailAddress: 'a.schmidt@siemens.com'
  },
  {
    sNo: 5,
    customerOrganizationName: 'Singapore Government',
    parentGroupHoldingCompany: 'Government of Singapore',
    country: 'Singapore',
    cityHqKeyOffice: 'Singapore',
    coreIndustry: 'Govt',
    companySize: '150,000+ employees',
    estimatedAdvocacyUserBase: '1,000 - 3,000',
    keyContactPerson: 'David Tan',
    designationDepartment: 'Chief Communications Officer',
    emailAddress: 'd.tan@gov.sg'
  },
  {
    sNo: 6,
    customerOrganizationName: 'Infosys Limited',
    parentGroupHoldingCompany: 'Infosys Limited',
    country: 'India',
    cityHqKeyOffice: 'Bangalore',
    coreIndustry: 'Tech',
    companySize: '350,000+ employees',
    estimatedAdvocacyUserBase: '5,000 - 15,000',
    keyContactPerson: 'Priya Sharma',
    designationDepartment: 'VP Marketing & Communications',
    emailAddress: 'p.sharma@infosys.com'
  },
  {
    sNo: 7,
    customerOrganizationName: 'JPMorgan Chase',
    parentGroupHoldingCompany: 'JPMorgan Chase & Co.',
    country: 'United States',
    cityHqKeyOffice: 'New York, NY',
    coreIndustry: 'BFSI',
    companySize: '280,000+ employees',
    estimatedAdvocacyUserBase: '3,000 - 7,000',
    keyContactPerson: 'Robert Chen',
    designationDepartment: 'Head of Internal Comms',
    emailAddress: 'r.chen@jpmorgan.com'
  },
  {
    sNo: 8,
    customerOrganizationName: 'Carrefour Group',
    parentGroupHoldingCompany: 'Carrefour SA',
    country: 'France',
    cityHqKeyOffice: 'Paris',
    coreIndustry: 'Retail',
    companySize: '320,000+ employees',
    estimatedAdvocacyUserBase: '2,000 - 5,000',
    keyContactPerson: 'Marie Dubois',
    designationDepartment: 'Employee Experience Director',
    emailAddress: 'm.dubois@carrefour.com'
  }
]

// Sample data for Proposition 2
const proposition2Data: Proposition2Data[] = proposition1Data.map((item, index) => ({
  ...item,
  phoneWhatsAppNumber: ['+1 312 555 0100', '+44 20 7991 8888', '+1 479 555 0200', '+49 89 555 0300', '+65 6555 0400', '+91 80 555 0500', '+1 212 555 0600', '+33 1 55 55 0700'][index] || '',
  linkedInProfile: [`linkedin.com/in/${item.keyContactPerson.toLowerCase().replace(' ', '-')}`][0] || '',
  websiteUrl: [`www.${item.customerOrganizationName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`][0] || '',
  primaryNeedFocus: ['Software', 'Both', 'Services', 'Software', 'Both', 'Software', 'Services', 'Both'][index] || 'Both',
  keyProductNeeds: ['Content distribution, Analytics', 'Gamification, Analytics, Integrations', 'Content distribution, Gamification', 'Analytics, Integrations', 'Content distribution, Compliance', 'Gamification, Analytics', 'Content distribution, Integrations', 'Analytics, Gamification'][index] || '',
  keyServiceNeeds: ['Implementation, Training', 'Onboarding, Managed program', 'Training, Compliance', 'Implementation, Onboarding', 'Managed program, Compliance', 'Training, Implementation', 'Onboarding, Compliance', 'Implementation, Managed program'][index] || ''
}))

// Sample data for Proposition 3
const proposition3Data: Proposition3Data[] = proposition2Data.map((item, index) => ({
  ...item,
  decisionMakers: ['HR, Marketing', 'Internal Comms, IT', 'HR, Internal Comms', 'Marketing, IT', 'Procurement, HR', 'Internal Comms, Marketing', 'IT, Procurement', 'HR, Marketing'][index] || '',
  currentEmployeeAdvocacySetup: ['Sprinklr', 'None', 'Hootsuite', 'None', 'Custom solution', 'Sociabble', 'None', 'PostBeyond'][index] || 'None',
  buyingContractingModel: ['Enterprise license', 'Pilot', 'Subscription', 'Multi-year', 'Pilot', 'Enterprise license', 'Subscription', 'Multi-year'][index] || 'Subscription',
  customerBenchmarkingSummary: [
    'Similar to Deloitte, McKinsey - consulting peers',
    'Comparable to Barclays, Standard Chartered - banking sector',
    'Similar to Target, Costco - retail competitors',
    'Comparable to ABB, Schneider - industrial peers',
    'Similar to other APAC governments',
    'Comparable to TCS, Wipro - IT services peers',
    'Similar to Goldman Sachs, Morgan Stanley - finance sector',
    'Comparable to Tesco, Aldi - European retail'
  ][index] || ''
}))

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title, height = 600 }: CustomerIntelligenceDatabaseProps) {
  const [activeTab, setActiveTab] = useState<'prop1' | 'prop2' | 'prop3'>('prop1')

  // Render Proposition 1 Table
  const renderProposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          {/* First row - Group headers */}
          <tr>
            <th rowSpan={2} className="bg-[#F0F0F0] border border-gray-300 px-2 py-2 text-center text-xs font-semibold text-black w-10">
              S.No
            </th>
            <th colSpan={7} className="bg-[#D6EAF8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-[#1B4F72]">
              Customer Information
            </th>
            <th colSpan={3} className="bg-[#D6EAF8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-[#1B4F72]">
              Contact Details
            </th>
          </tr>
          {/* Second row - Column headers */}
          <tr>
            {/* Customer Information */}
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              Customer / Organization Name
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              Parent Group / Holding Company
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[100px]">
              Country
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[120px]">
              City / HQ / Key Office
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              <div>Core Industry</div>
              <div className="font-normal text-[10px] text-gray-600">(Tech / BFSI / Retail / Manufacturing / Govt / Others)</div>
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              <div>Company Size</div>
              <div className="font-normal text-[10px] text-gray-600">(Employees / Revenue band)</div>
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              <div>Estimated Advocacy User Base</div>
              <div className="font-normal text-[10px] text-gray-600">(target employees / ambassadors)</div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              Key Contact Person
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              Designation / Department
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              Email Address
            </th>
          </tr>
        </thead>
        <tbody>
          {proposition1Data.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black text-center">{customer.sNo}</td>
              {/* Customer Information */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.customerOrganizationName}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.parentGroupHoldingCompany}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.country}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.cityHqKeyOffice}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.coreIndustry}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.companySize}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.estimatedAdvocacyUserBase}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.designationDepartment}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Render Proposition 2 Table
  const renderProposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          {/* First row - Group headers */}
          <tr>
            <th rowSpan={2} className="bg-[#F0F0F0] border border-gray-300 px-2 py-2 text-center text-xs font-semibold text-black w-10">
              S.No
            </th>
            <th colSpan={7} className="bg-[#D6EAF8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-[#1B4F72]">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#D6EAF8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-[#1B4F72]">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#D6EAF8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-[#1B4F72]">
              Needs & Pain Points
            </th>
          </tr>
          {/* Second row - Column headers */}
          <tr>
            {/* Customer Information */}
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              Customer / Organization Name
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              Parent Group / Holding Company
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[100px]">
              Country
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[120px]">
              City / HQ / Key Office
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              <div>Core Industry</div>
              <div className="font-normal text-[10px] text-gray-600">(Tech / BFSI / Retail / Manufacturing / Govt / Others)</div>
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              <div>Company Size</div>
              <div className="font-normal text-[10px] text-gray-600">(Employees / Revenue band)</div>
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              <div>Estimated Advocacy User Base</div>
              <div className="font-normal text-[10px] text-gray-600">(target employees / ambassadors)</div>
            </th>
            {/* Contact Details - Extended */}
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              Email Address
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              Phone / WhatsApp Number
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              LinkedIn Profile
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              Website URL
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              Key Contact Person
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              Designation / Department
            </th>
            {/* Needs & Pain Points */}
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              <div>Primary Need Focus</div>
              <div className="font-normal text-[10px] text-gray-600">(Software / Services / Both)</div>
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[200px]">
              <div>Key Product Needs</div>
              <div className="font-normal text-[10px] text-gray-600">(content distribution, gamification, analytics, integrations)</div>
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[220px]">
              <div>Key Service Needs</div>
              <div className="font-normal text-[10px] text-gray-600">(implementation, onboarding, training, managed program, compliance)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {proposition2Data.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black text-center">{customer.sNo}</td>
              {/* Customer Information */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.customerOrganizationName}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.parentGroupHoldingCompany}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.country}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.cityHqKeyOffice}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.coreIndustry}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.companySize}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.estimatedAdvocacyUserBase}</td>
              {/* Contact Details - Extended */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.phoneWhatsAppNumber}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.designationDepartment}</td>
              {/* Needs & Pain Points */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.primaryNeedFocus}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyProductNeeds}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyServiceNeeds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Render Proposition 3 Table
  const renderProposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          {/* First row - Group headers */}
          <tr>
            <th rowSpan={2} className="bg-[#F0F0F0] border border-gray-300 px-2 py-2 text-center text-xs font-semibold text-black w-10">
              S.No
            </th>
            <th colSpan={7} className="bg-[#D6EAF8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-[#1B4F72]">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#D6EAF8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-[#1B4F72]">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#D6EAF8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-[#1B4F72]">
              Needs & Pain Points
            </th>
            <th colSpan={3} className="bg-[#FCE4EC] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-[#880E4F]">
              Purchasing Behaviour
            </th>
            <th colSpan={1} className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-[#1B5E20]">
              CMI Insights
            </th>
          </tr>
          {/* Second row - Column headers */}
          <tr>
            {/* Customer Information */}
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              Customer / Organization Name
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              Parent Group / Holding Company
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[100px]">
              Country
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[120px]">
              City / HQ / Key Office
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              <div>Core Industry</div>
              <div className="font-normal text-[10px] text-gray-600">(Tech / BFSI / Retail / Manufacturing / Govt / Others)</div>
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              <div>Company Size</div>
              <div className="font-normal text-[10px] text-gray-600">(Employees / Revenue band)</div>
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              <div>Estimated Advocacy User Base</div>
              <div className="font-normal text-[10px] text-gray-600">(target employees / ambassadors)</div>
            </th>
            {/* Contact Details - Extended */}
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[180px]">
              Email Address
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              Phone / WhatsApp Number
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              LinkedIn Profile
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              Website URL
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              Key Contact Person
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              Designation / Department
            </th>
            {/* Needs & Pain Points */}
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[150px]">
              <div>Primary Need Focus</div>
              <div className="font-normal text-[10px] text-gray-600">(Software / Services / Both)</div>
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[200px]">
              <div>Key Product Needs</div>
              <div className="font-normal text-[10px] text-gray-600">(content distribution, gamification, analytics, integrations)</div>
            </th>
            <th className="bg-[#EBF5FB] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B4F72] min-w-[220px]">
              <div>Key Service Needs</div>
              <div className="font-normal text-[10px] text-gray-600">(implementation, onboarding, training, managed program, compliance)</div>
            </th>
            {/* Purchasing Behaviour */}
            <th className="bg-[#FCE4EC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#880E4F] min-w-[180px]">
              <div>Decision Makers</div>
              <div className="font-normal text-[10px] text-gray-600">(HR, Internal Comms, Marketing, IT, Procurement, etc)</div>
            </th>
            <th className="bg-[#FCE4EC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#880E4F] min-w-[180px]">
              <div>Current Employee Advocacy Setup</div>
              <div className="font-normal text-[10px] text-gray-600">(Existing Tool)</div>
            </th>
            <th className="bg-[#FCE4EC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#880E4F] min-w-[200px]">
              <div>Buying / Contracting Model</div>
              <div className="font-normal text-[10px] text-gray-600">(pilot / subscription / enterprise license / multi-year)</div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#E8F5E9] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-[#1B5E20] min-w-[250px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(peer group, similar orgs, suggested angle)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {proposition3Data.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black text-center">{customer.sNo}</td>
              {/* Customer Information */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.customerOrganizationName}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.parentGroupHoldingCompany}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.country}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.cityHqKeyOffice}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.coreIndustry}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.companySize}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.estimatedAdvocacyUserBase}</td>
              {/* Contact Details - Extended */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.phoneWhatsAppNumber}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.designationDepartment}</td>
              {/* Needs & Pain Points */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.primaryNeedFocus}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyProductNeeds}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyServiceNeeds}</td>
              {/* Purchasing Behaviour */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.decisionMakers}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.currentEmployeeAdvocacySetup}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.buyingContractingModel}</td>
              {/* CMI Insights */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.customerBenchmarkingSummary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">{title || 'Customer Intelligence Database'}</h2>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('prop1')}
          className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'prop1'
              ? 'bg-[#1B4F72] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Proposition 1
          <span className="block text-xs font-normal mt-1">Basic</span>
        </button>
        <button
          onClick={() => setActiveTab('prop2')}
          className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'prop2'
              ? 'bg-[#1B4F72] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Proposition 2
          <span className="block text-xs font-normal mt-1">Advanced</span>
        </button>
        <button
          onClick={() => setActiveTab('prop3')}
          className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'prop3'
              ? 'bg-[#1B4F72] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Proposition 3
          <span className="block text-xs font-normal mt-1"> Premium</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        {activeTab === 'prop1' && (
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Proposition 1: Basic Customer Intelligence</h3>
            <p className="text-sm text-gray-600 mb-4">Customer Information and Contact Details for employee advocacy prospects.</p>
            {renderProposition1Table()}
          </div>
        )}
        {activeTab === 'prop2' && (
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Proposition 2: Customer Intelligence with Needs Analysis</h3>
            <p className="text-sm text-gray-600 mb-4">Extended contact details plus needs and pain points identification for targeted outreach.</p>
            {renderProposition2Table()}
          </div>
        )}
        {activeTab === 'prop3' && (
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Proposition 3: Complete Customer Intelligence</h3>
            <p className="text-sm text-gray-600 mb-4">Full intelligence including purchasing behaviour and CMI benchmarking insights.</p>
            {renderProposition3Table()}
          </div>
        )}
      </div>
    </div>
  )
}
