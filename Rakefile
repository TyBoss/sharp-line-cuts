task :default => 'site:build'

desc "Generate site directory."
directory "site"

namespace :site do
  desc "Remove site directory"
  task :clean do
    FileUtils.rm_r 'site' if File.exists?('site')
  end

  desc "Rebuild site."
  task :rebuild => ['clean', 'site']

  desc "Copy static assets into site directory."
  task :assets => ['rebuild'] do
    Dir['stylesheets', 'images', 'galleria', 'javascripts'].each { |directory| FileUtils.cp_r directory, 'site' }
  end

  desc "Build site for deployment."
  task :build => ['rebuild', 'assets', 'jade:home', 'jade:gallery']
end

namespace :jade do
  desc "Compile main content area jade template and generate index.htm."
  task :home => 'site:rebuild' do
    sh "bin/genhome"
  end

  desc "Compile image gallery jade template and generate haircut-gallery.htm."
  task :gallery => 'site:rebuild' do
    sh "bin/gengallery"
  end
end
