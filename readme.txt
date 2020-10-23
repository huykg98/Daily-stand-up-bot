config pms-jdbc-1.0.0.jar into any service in the first time:
1. add this plugin and pms-jdbc.jar as dependency:
	 <dependency>
            <groupId>${project.home.groupId}</groupId>
            <artifactId>pms-jdbc</artifactId>
            <version>${project.version}</version>
        </dependency>
	<plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-install-plugin</artifactId>
                <version>2.5.2</version>
                <executions>
                    <execution>
                        <id>install-external</id>
                        <phase>clean</phase>
                        <configuration>
                            <file>${project.basedir}/src/main/resources/pms-jdbc-1.0.0.jar</file>
                            <repositoryLayout>default</repositoryLayout>
                            <groupId>${project.groupId}</groupId>
                            <artifactId>pms-jdbc</artifactId>
                            <version>${project.version}</version>
                            <packaging>jar</packaging>
                            <generatePom>true</generatePom>
                        </configuration>
                        <goals>
                            <goal>install-file</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>

2. Clean project (not Clean and Build)
3. Build project
4. Run project
Note: The next time you do not need to repeat these steps.