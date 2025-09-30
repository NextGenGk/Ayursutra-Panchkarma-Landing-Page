import { Settings, User, Shield, Bell, Database, Palette, Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and system preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Settings */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <User className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Profile Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input 
                type="text" 
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Gaurav Atkola"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="atkola12345@gmail.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Role</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Admin</option>
                <option>Doctor</option>
                <option>Patient</option>
                <option>Monitoring</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input 
                type="tel" 
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-semibold">Security Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Login Notifications</p>
                <p className="text-sm text-muted-foreground">Get notified of new logins</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </button>
            </div>
            <div>
              <button className="w-full px-4 py-2 border rounded-md hover:bg-accent transition-colors">
                Change Password
              </button>
            </div>
            <div>
              <button className="w-full px-4 py-2 border rounded-md hover:bg-accent transition-colors">
                View Login History
              </button>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="h-5 w-5 text-yellow-600" />
            <h3 className="text-lg font-semibold">Notification Preferences</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive updates via email</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Browser notifications</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-muted-foreground">Text message alerts</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* System Preferences */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold">System Preferences</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Language</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Timezone</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC-6 (Central Time)</option>
                <option>UTC-7 (Mountain Time)</option>
                <option>UTC-8 (Pacific Time)</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Date Format</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>MM/DD/YYYY</option>
                <option>DD/MM/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Settings */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Palette className="h-5 w-5 text-green-600" />
          <h3 className="text-lg font-semibold">Appearance</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors">
            <div className="w-full h-20 bg-white border rounded mb-2"></div>
            <p className="text-sm font-medium text-center">Light</p>
          </div>
          <div className="p-4 border-2 border-primary rounded-lg cursor-pointer">
            <div className="w-full h-20 bg-gray-800 rounded mb-2"></div>
            <p className="text-sm font-medium text-center">Dark</p>
          </div>
          <div className="p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors">
            <div className="w-full h-20 bg-gradient-to-r from-white to-gray-800 rounded mb-2"></div>
            <p className="text-sm font-medium text-center">System</p>
          </div>
        </div>
      </div>

      {/* Data & Privacy */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Database className="h-5 w-5 text-orange-600" />
          <h3 className="text-lg font-semibold">Data & Privacy</h3>
        </div>
        <div className="space-y-3">
          <button className="w-full p-3 text-left border rounded-md hover:bg-accent transition-colors">
            <p className="font-medium">Export Data</p>
            <p className="text-sm text-muted-foreground">Download a copy of your data</p>
          </button>
          <button className="w-full p-3 text-left border rounded-md hover:bg-accent transition-colors">
            <p className="font-medium">Privacy Settings</p>
            <p className="text-sm text-muted-foreground">Manage your privacy preferences</p>
          </button>
          <button className="w-full p-3 text-left border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition-colors">
            <p className="font-medium">Delete Account</p>
            <p className="text-sm text-red-500">Permanently delete your account and data</p>
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>
    </div>
  )
}