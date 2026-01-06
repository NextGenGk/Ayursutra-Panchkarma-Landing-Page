import { User, Phone, Save, ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"

export default function AddPatientPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="https://ayursutra-patient-portal.vercel.app/" className="p-2 hover:bg-accent rounded-md">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Add New Patient</h2>
          <p className="text-muted-foreground">
            Register a new patient in the system
          </p>
        </div>
      </div>

      <div className="max-w-4xl">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <form className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Personal Information
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="text-sm font-medium">First Name *</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name *</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter last name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Date of Birth *</label>
                  <input 
                    type="date" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Gender</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Blood Type</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select blood type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Marital Status</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                Contact Information
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Primary Phone *</label>
                  <input 
                    type="tel" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Secondary Phone</label>
                  <input 
                    type="tel" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="patient@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Emergency Contact</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Emergency contact name"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Address Information
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Street Address</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">City</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="City name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">State/Province</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="State or Province"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">ZIP/Postal Code</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="12345"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Country</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FileText className="h-5 w-5 text-red-600" />
                Medical Information
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Primary Care Physician</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select doctor</option>
                    <option value="dr-wilson">Dr. Sarah Wilson</option>
                    <option value="dr-brown">Dr. James Brown</option>
                    <option value="dr-johnson">Dr. Michael Johnson</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Insurance Provider</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Insurance company name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Insurance ID</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Insurance ID number"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Group Number</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Group number"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Known Allergies</label>
                <textarea 
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="List any known allergies or medical conditions..."
                />
              </div>
              <div>
                <label className="text-sm font-medium">Current Medications</label>
                <textarea 
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="List current medications and dosages..."
                />
              </div>
              <div>
                <label className="text-sm font-medium">Medical History</label>
                <textarea 
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Brief medical history and relevant conditions..."
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-3 pt-4 border-t">
              <button 
                type="submit"
                className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                <Save className="h-4 w-4" />
                Add Patient
              </button>
              <Link 
                href="https://ayursutra-patient-portal.vercel.app/"
                className="px-6 py-2 border rounded-md hover:bg-accent transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}